"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import * as XLSX from 'xlsx';

interface QuoteRequest {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  status: string;
  files: { name: string; url: string }[];
  type: string;
  service_required: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('quotes');
  const [leads, setLeads] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Modal State
  const [selectedLead, setSelectedLead] = useState<QuoteRequest | null>(null);
  
  // Delete Confirmation State
  const [leadToDelete, setLeadToDelete] = useState<QuoteRequest | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (activeTab === 'quotes' || activeTab === 'uploaded_plans') {
      setCurrentPage(1); // Reset page on tab switch
      fetchLeads();
    }
  }, [activeTab]);

  const fetchLeads = async () => {
    setIsLoading(true);
    setError('');
    try {
      let query = supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (activeTab === 'quotes') {
        query = query.eq('type', 'contact');
      } else if (activeTab === 'uploaded_plans') {
        query = query.or('type.eq.upload,type.is.null');
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }
      
      setLeads(data || []);
    } catch (err: any) {
      console.error('Error fetching leads:', err);
      setError(err.message || 'Failed to load leads.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('quote_requests')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      
      setLeads(leads.map(lead => 
        lead.id === id ? { ...lead, status: newStatus } : lead
      ));
      
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const handleDeleteClick = (lead: QuoteRequest) => {
    setLeadToDelete(lead);
  };

  const confirmDeleteLead = async () => {
    if (!leadToDelete) return;

    try {
      if (leadToDelete.files && leadToDelete.files.length > 0) {
        const filePaths = leadToDelete.files.map(f => {
          const urlParts = f.url.split('/plans/');
          return urlParts.length > 1 ? urlParts[1] : null;
        }).filter(Boolean) as string[];

        if (filePaths.length > 0) {
          const { error: storageError } = await supabase.storage.from('plans').remove(filePaths);
          if (storageError) {
            console.error('Error deleting files from storage:', storageError);
          }
        }
      }

      const { error: dbError } = await supabase
        .from('quote_requests')
        .delete()
        .eq('id', leadToDelete.id);

      if (dbError) throw dbError;

      setLeads(leads.filter(l => l.id !== leadToDelete.id));
      if (selectedLead?.id === leadToDelete.id) {
        setSelectedLead(null);
      }
      setLeadToDelete(null);
      
    } catch (err) {
      console.error('Error deleting lead:', err);
      alert('Failed to delete the lead.');
    }
  };

  const exportToExcel = (leadsToExport: QuoteRequest[], filename: string) => {
    const formattedData = leadsToExport.map(lead => ({
      'Date': new Date(lead.created_at).toLocaleString(),
      'Name': lead.name,
      'Email': lead.email,
      'Phone': lead.phone,
      'Service Required': lead.service_required || 'N/A',
      'Details': lead.details || 'N/A',
      'Status': lead.status || 'New',
      'Files Attached': lead.files && lead.files.length > 0 ? lead.files.map(f => f.name).join(', ') : 'None'
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    const maxWidths = formattedData.reduce((acc, row) => {
      Object.keys(row).forEach((key, index) => {
        const val = String((row as any)[key] || "");
        acc[index] = Math.max(acc[index] || key.length, val.length) + 2; 
      });
      return acc;
    }, [] as number[]);
    
    worksheet['!cols'] = maxWidths.map(w => ({ width: Math.min(w, 50) })); 

    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  const exportCurrentView = () => {
    const tabName = activeTab === 'quotes' ? 'Quotes' : 'Uploaded_Plans';
    exportToExcel(currentLeads, `${tabName}_Page_${currentPage}_Export`);
    setShowExportMenu(false);
  };

  const exportAllLeads = async () => {
    setIsExporting(true);
    setShowExportMenu(false);
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      exportToExcel(data || [], "All_Database_Leads_Export");
    } catch (err) {
      console.error('Error exporting all leads:', err);
      alert('Failed to export all leads.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  // Pagination Logic
  const totalPages = Math.ceil(leads.length / itemsPerPage) || 1;
  const indexOfLastLead = currentPage * itemsPerPage;
  const indexOfFirstLead = indexOfLastLead - itemsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins">
      
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white flex flex-col hidden md:flex shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <img src="/logo-transparent.png" alt="Logo" className="h-8 brightness-0 invert" />
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('quotes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'quotes' ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Quotes
          </button>
          
          <button 
            onClick={() => setActiveTab('uploaded_plans')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'uploaded_plans' ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Uploaded Plans
          </button>

          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </div>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Mobile Header Toggle */}
        <div className="md:hidden bg-brand-navy text-white p-4 flex justify-between items-center shrink-0">
          <img src="/logo-transparent.png" alt="Logo" className="h-6 brightness-0 invert" />
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('quotes')} className={`px-3 py-1 rounded text-xs ${activeTab === 'quotes' ? 'bg-brand-orange' : 'bg-white/10'}`}>Quotes</button>
            <button onClick={() => setActiveTab('uploaded_plans')} className={`px-3 py-1 rounded text-xs ${activeTab === 'uploaded_plans' ? 'bg-brand-orange' : 'bg-white/10'}`}>Plans</button>
          </div>
        </div>

        <header className="hidden md:flex h-16 bg-white border-b border-gray-200 items-center justify-between px-6 lg:px-8 shadow-sm z-10 shrink-0">
          <h1 className="text-xl font-bold text-gray-800">
            {activeTab === 'quotes' && 'Quotes (Contact Form)'}
            {activeTab === 'uploaded_plans' && 'Uploaded Plans'}
            {activeTab === 'settings' && 'Admin Settings'}
          </h1>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 hidden sm:block">Admin User</span>
            <button onClick={handleLogout} className="h-8 w-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm shadow-md hover:bg-orange-600 transition-colors" title="Logout">
              A
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          
          {activeTab === 'quotes' || activeTab === 'uploaded_plans' ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
              
              {/* Table Header Controls */}
              <div className="px-4 md:px-6 py-4 md:py-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50/50 gap-4">
                <h3 className="text-lg font-bold text-gray-900 hidden md:block">Recent Submissions</h3>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                  
                  {/* Export Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowExportMenu(!showExportMenu)}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full md:w-auto"
                      disabled={isExporting}
                    >
                      {isExporting ? (
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                      <span className="hidden sm:inline">Export Data</span>
                      <span className="sm:hidden">Export</span>
                    </button>
                    {showExportMenu && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-20">
                        <button 
                          onClick={exportCurrentView}
                          className="w-full text-left px-4 py-3 md:py-2 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                        >
                          Export Current Page ({currentLeads.length})
                        </button>
                        <button 
                          onClick={exportAllLeads}
                          className="w-full text-left px-4 py-3 md:py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Export All Leads ({leads.length})
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Refresh Button */}
                  <button 
                    onClick={fetchLeads} 
                    className="p-2 text-gray-500 hover:text-brand-orange hover:bg-orange-50 rounded-lg transition-colors bg-white border border-gray-200 md:border-transparent"
                    title="Refresh Data"
                  >
                    <svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-2 md:py-1 rounded-full whitespace-nowrap">
                    {leads.length} Total
                  </span>
                </div>
              </div>
              
              {/* Table Wrapper (Horizontally Scrollable) */}
              <div className="flex-1 overflow-x-auto min-h-[400px]">
                {error ? (
                  <div className="p-8 text-center text-red-500">
                    <p className="font-bold">Error loading data.</p>
                    <p className="text-sm">{error}</p>
                  </div>
                ) : isLoading && leads.length === 0 ? (
                  <div className="p-12 flex justify-center">
                    <svg className="animate-spin h-8 w-8 text-brand-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                ) : leads.length === 0 ? (
                  <div className="p-12 text-center text-gray-500">
                    No requests found for this category.
                  </div>
                ) : (
                  <table className="min-w-max w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[250px]">
                          Client Details
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[300px]">
                          Notes / Requirements
                        </th>
                        {activeTab === 'quotes' && (
                          <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[200px]">
                            Service Required
                          </th>
                        )}
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[150px]">
                          Date / Status
                        </th>
                        {activeTab === 'uploaded_plans' && (
                          <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[250px]">
                            Plans
                          </th>
                        )}
                        <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[150px] sticky right-0 bg-gray-50">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors group">
                          <td className="px-6 py-4 whitespace-nowrap cursor-pointer" onClick={() => setSelectedLead(lead)}>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors">{lead.name}</span>
                              <span className="text-sm text-gray-500">{lead.email}</span>
                              <span className="text-xs text-gray-400 mt-0.5">{lead.phone}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 cursor-pointer" onClick={() => setSelectedLead(lead)}>
                            <div className="text-sm text-gray-900 truncate max-w-[300px]">
                              {lead.details || <span className="text-gray-400 italic">No details provided</span>}
                            </div>
                          </td>
                          {activeTab === 'quotes' && (
                            <td className="px-6 py-4 whitespace-nowrap cursor-pointer" onClick={() => setSelectedLead(lead)}>
                              <div className="text-sm text-gray-900">
                                {lead.service_required || <span className="text-gray-400 italic">-</span>}
                              </div>
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 mb-1">
                              {new Date(lead.created_at).toLocaleDateString()}
                            </div>
                            <select 
                              value={lead.status || 'New'}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                              className={`text-xs font-medium rounded-md px-2 py-1 outline-none border cursor-pointer w-full max-w-[120px] ${
                                lead.status === 'New' || !lead.status ? 'bg-green-50 text-green-700 border-green-200' : 
                                lead.status === 'Reviewed' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                                'bg-gray-50 text-gray-700 border-gray-200'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Reviewed">Reviewed</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          {activeTab === 'uploaded_plans' && (
                            <td className="px-6 py-4 text-left text-sm font-medium">
                              {lead.files && lead.files.length > 0 ? (
                                <div className="flex flex-col items-start gap-2">
                                  {lead.files.slice(0, 2).map((file, idx) => (
                                    <a 
                                      key={idx}
                                      href={file.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/5 hover:bg-brand-navy/10 text-brand-navy rounded-md transition-colors text-xs max-w-[200px]"
                                    >
                                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                      <span className="truncate">{file.name}</span>
                                    </a>
                                  ))}
                                  {lead.files.length > 2 && (
                                    <button onClick={() => setSelectedLead(lead)} className="text-xs text-brand-orange hover:underline pl-1">
                                      + {lead.files.length - 2} more files
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <span className="text-gray-400 italic text-xs">No plan attached</span>
                              )}
                            </td>
                          )}
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium sticky right-0 bg-white group-hover:bg-gray-50/80 transition-colors shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.05)] border-l border-gray-100">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="p-2 text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                                title="View Full Details"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => exportToExcel([lead], `${lead.name.replace(/\\s+/g, '_')}_Lead`)}
                                className="p-2 text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
                                title="Export Lead to Excel"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteClick(lead)}
                                className="p-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                                title="Delete Lead"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Pagination Controls */}
              {!isLoading && leads.length > 0 && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between shrink-0">
                  <div className="text-sm text-gray-500 hidden sm:block">
                    Showing <span className="font-medium">{indexOfFirstLead + 1}</span> to <span className="font-medium">{Math.min(indexOfLastLead, leads.length)}</span> of <span className="font-medium">{leads.length}</span> results
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-between sm:justify-end">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <span className="flex items-center px-4 text-sm font-medium text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center flex flex-col items-center justify-center h-[50vh]">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Coming Soon</h3>
              <p className="text-gray-500 max-w-sm mx-auto">This section is currently under development. Please check the other tabs to view your leads.</p>
            </div>
          )}
          
        </div>
      </main>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto pt-20 pb-20">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-full overflow-y-auto border border-gray-100 flex flex-col animate-in fade-in zoom-in-95 duration-200 m-auto relative">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center z-10 shrink-0">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Lead Details</h2>
                <p className="text-sm text-gray-500 mt-0.5">Submitted on {new Date(selectedLead.created_at).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8 flex-1">
              
              {/* Contact Info Card */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Full Name</p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Email Address</p>
                    <a href={`mailto:${selectedLead.email}`} className="text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                      {selectedLead.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Phone Number</p>
                    <a href={`tel:${selectedLead.phone}`} className="text-base font-medium text-brand-navy hover:text-brand-orange transition-colors">
                      {selectedLead.phone || 'Not provided'}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Current Status</p>
                    <select 
                      value={selectedLead.status || 'New'}
                      onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value)}
                      className={`text-sm font-bold rounded-md px-3 py-1.5 outline-none border cursor-pointer mt-0.5 w-full md:w-auto ${
                        selectedLead.status === 'New' || !selectedLead.status ? 'bg-green-50 text-green-700 border-green-200' : 
                        selectedLead.status === 'Reviewed' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Reviewed">Reviewed</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Requirements & Details */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Requirements & Notes
                </h3>
                
                {selectedLead.service_required && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 font-medium mb-2">Service Requested</p>
                    <span className="inline-block bg-brand-navy/5 border border-brand-navy/10 text-brand-navy px-4 py-2 rounded-lg text-sm font-semibold">
                      {selectedLead.service_required}
                    </span>
                  </div>
                )}
                
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-2">Detailed Notes</p>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap min-h-[100px]">
                    {selectedLead.details || <span className="italic text-gray-400">No additional details were provided by the client.</span>}
                  </div>
                </div>
              </div>

              {/* Attached Files */}
              {selectedLead.files && selectedLead.files.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    Attached Files ({selectedLead.files.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedLead.files.map((file, idx) => (
                      <a 
                        key={idx}
                        href={file.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-brand-orange rounded-xl transition-all group shadow-sm hover:shadow-md"
                      >
                        <div className="h-10 w-10 bg-brand-navy/5 text-brand-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">Click to download</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-b-2xl shrink-0">
              <button
                onClick={() => handleDeleteClick(selectedLead)}
                className="w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete Lead
              </button>
              <div className="flex w-full sm:w-auto gap-3">
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => exportToExcel([selectedLead], `${selectedLead.name.replace(/\\s+/g, '_')}_Lead`)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-brand-orange hover:bg-orange-600 shadow-md transition-colors flex justify-center items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export Data
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {leadToDelete && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Lead?</h3>
              <p className="text-gray-500 mb-8">
                Are you sure you want to delete <span className="font-semibold text-gray-700">{leadToDelete.name}</span>? This action cannot be undone and will permanently remove all associated data and files.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setLeadToDelete(null)}
                  className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteLead}
                  className="flex-1 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors"
                >
                  Yes, Delete It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
