'use client';

import { useState, useEffect, useRef } from 'react';

interface FileDetails {
  name: string;
  size: string;
}

export default function GlobalUploadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<FileDetails[]>([]);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleTrigger = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setProgress(0);
      setIsUploading(false);
      
      // Try to trigger the file browser automatically for desktop browsers
      setTimeout(() => {
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
          try {
            fileInputRef.current.click();
          } catch (e) {
            console.log('Auto file trigger blocked by browser security. Fallback to manual browse button is available.', e);
          }
        }
      }, 50);
    };

    window.addEventListener('trigger-plan-upload', handleTrigger);
    return () => {
      window.removeEventListener('trigger-plan-upload', handleTrigger);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles: FileDetails[] = Array.from(e.target.files).map(file => {
        const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
        return {
          name: file.name,
          size: `${sizeInMb} MB`,
        };
      });
      setFiles(prev => [...prev, ...selectedFiles]);
      setIsOpen(true);
      setIsSuccess(false);
      setProgress(0);
      setIsUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const selectedFiles: FileDetails[] = Array.from(e.dataTransfer.files).map(file => {
        const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
        return {
          name: file.name,
          size: `${sizeInMb} MB`,
        };
      });
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setFiles([]);
    setIsSuccess(false);
    setIsUploading(false);
    setProgress(0);
    setName('');
    setEmail('');
    setPhone('');
    setDetails('');
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsUploading(true);
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setIsSuccess(true);
        // Clear form
        setName('');
        setEmail('');
        setPhone('');
        setDetails('');
      }
    }, 150);
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept=".pdf,.dwg,.dxf,.zip,.rar,.png,.jpg,.jpeg"
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 scale-100 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-brand-navy p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Upload Project Plans</h2>
                <p className="text-xs text-gray-300 mt-1">Send us your blueprints to receive a free quote within 24 hours.</p>
              </div>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow space-y-6">
              {isSuccess ? (
                /* Success State */
                <div className="text-center py-8 px-4 animate-scale-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Upload Successful!</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you! Your files have been uploaded successfully. Our estimation team is already reviewing them. We will send your takeoff estimate to <strong className="text-brand-navy">{email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : isUploading ? (
                /* Uploading State */
                <div className="text-center py-12 px-4">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-brand-navy text-sm">
                      {progress}%
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Uploading Blueprint Files...</h3>
                  <p className="text-sm text-gray-500 max-w-xs mx-auto mb-4">Please do not close this window or navigate away.</p>
                  
                  {/* Progress bar container */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-orange h-full rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ) : files.length === 0 ? (
                /* Dropzone / File Selector State */
                <div 
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all ${
                    isDragActive 
                      ? 'border-brand-orange bg-orange-50/30 scale-[0.99]' 
                      : 'border-gray-300 hover:border-brand-orange bg-gray-50/50'
                  }`}
                >
                  <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-1">Drag and drop your plans here</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed font-medium">
                    Or browse from your device. Supports PDF, CAD (DWG, DXF), ZIP, RAR, images.
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Browse Files
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleUploadSubmit} className="space-y-6">
                  {/* Selected Files List */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center justify-between">
                      <span>Selected Files ({files.length})</span>
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="text-brand-orange hover:underline normal-case font-bold cursor-pointer"
                      >
                        + Add More
                      </button>
                    </h4>
                    <div className="space-y-2 max-h-[120px] overflow-y-auto pr-1">
                      {files.map((file, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-gray-150 text-xs">
                          <div className="flex items-center space-x-2.5 truncate pr-4">
                            <svg className="w-5 h-5 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="font-semibold text-brand-navy truncate">{file.name}</span>
                          </div>
                          <div className="flex items-center space-x-2 shrink-0">
                            <span className="text-gray-400 font-medium">{file.size}</span>
                            <button
                              type="button"
                              onClick={() => {
                                setFiles(prev => prev.filter((_, idx) => idx !== i));
                              }}
                              className="text-gray-400 hover:text-red-500 transition-colors p-0.5 rounded-full hover:bg-gray-100 cursor-pointer"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="modal-name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition text-sm"
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="modal-email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition text-sm"
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="modal-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition text-sm"
                        placeholder="(555) 123-4567" 
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-details" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Project Notes (Optional)</label>
                      <textarea 
                        id="modal-details"
                        rows={3}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition text-sm resize-none"
                        placeholder="Add any specific details, trades required, or deadlines..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-colors transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
