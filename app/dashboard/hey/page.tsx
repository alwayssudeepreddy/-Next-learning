import NavLinks from '../nav-links';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav className="w-64">
        <NavLinks />
      </nav>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}