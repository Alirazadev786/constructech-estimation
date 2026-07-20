export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[100] bg-gray-50 flex flex-col md:flex-row overflow-hidden">
      {/* This layout sits on top of the global Header/Footer for admin routes */}
      {children}
    </div>
  );
}
