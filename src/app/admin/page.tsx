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
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const deleteLead = async (lead: QuoteRequest) => {
    if (!window.confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
      return;
    }

    try {
      if (lead.files && lead.files.length > 0) {
        const filePaths = lead.files.map(f => {
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
        .eq('id', lead.id);

      if (dbError) throw dbError;

      setLeads(leads.filter(l => l.id !== lead.id));
      
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
    exportToExcel(leads, `${tabName}_Leads_Export`);
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

  return (
    <div className="flex h-screen w-full bg-gray-50 font-poppins">
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

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 shadow-sm z-10 shrink-0">
          <h1 className="text-xl font-bold text-gray-800">
            {activeTab === 'quotes' && 'Quotes (Contact Form)'}
            {activeTab === 'uploaded_plans' && 'Uploaded Plans'}
            {activeTab === 'settings' && 'Admin Settings'}
          </h1>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 hidden sm:block">Admin User</span>
            <div className="h-8 w-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 lg:p-8">
          
          {activeTab === 'quotes' || activeTab === 'uploaded_plans' ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900">Recent Submissions</h3>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <button 
                      onClick={() => setShowExportMenu(!showExportMenu)}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
                      Export Data
                    </button>
                    {showExportMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                        <button 
                          onClick={exportCurrentView}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Export Current View
                        </button>
                        <button 
                          onClick={exportAllLeads}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Export All (Entire Database)
                        </button>
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={fetchLeads} 
                    className="p-2 text-gray-500 hover:text-brand-orange hover:bg-orange-50 rounded-lg transition-colors"
                    title="Refresh Data"
                  >
                    <svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">
                    {leads.length} Total
                  </span>
                </div>
              </div>
              
              <div className="overflow-x-auto min-h-[400px]">
                {error ? (
                  <div className="p-8 text-center text-red-500">
                    <p className="font-bold">Error loading data.</p>
                    <p className="text-sm">{error}</p>
                    <p className="text-sm mt-2 text-gray-500">Please make sure you have created the `quote_requests` table in Supabase.</p>
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
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Client Details
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Notes / Requirements
                        </th>
                        {activeTab === 'quotes' && (
                          <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Service Required
                          </th>
                        )}
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Date / Status
                        </th>
                        {activeTab === 'uploaded_plans' && (
                          <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Plans
                          </th>
                        )}
                        <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-gray-900">{lead.name}</span>
                              <span className="text-sm text-gray-500">{lead.email}</span>
                              <span className="text-xs text-gray-400 mt-0.5">{lead.phone}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs line-clamp-2" title={lead.details || 'No details provided'}>
                              {lead.details || <span className="text-gray-400 italic">No details provided</span>}
                            </div>
                          </td>
                          {activeTab === 'quotes' && (
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {lead.service_required || <span className="text-gray-400 italic">-</span>}
                              </div>
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(lead.created_at).toLocaleDateString()}
                            </div>
                            <select 
                              value={lead.status || 'New'}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                              className={`mt-1 text-xs font-medium rounded-full px-2 py-1 outline-none border cursor-pointer ${
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
                                  {lead.files.map((file, idx) => (
                                    <a 
                                      key={idx}
                                      href={file.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/5 hover:bg-brand-navy/10 text-brand-navy rounded-md transition-colors text-xs"
                                    >
                                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                      <span className="truncate max-w-[150px]">{file.name}</span>
                                    </a>
                                  ))}
                                </div>
                              ) : (
                                <span className="text-gray-400 italic text-xs">No plan attached</span>
                              )}
                            </td>
                          )}
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center justify-end gap-3">
                              <button
                                onClick={() => exportToExcel([lead], `${lead.name}_Lead_Export`)}
                                className="text-green-600 hover:text-green-900 transition-colors"
                                title="Export Lead to Excel"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                              </button>
                              <button
                                onClick={() => deleteLead(lead)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                                title="Delete Lead"
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    </div>
  );
}
