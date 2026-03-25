"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Energy Usage", path: "/dashboard/energy", icon: "⚡" },
    { name: "Billing", path: "/dashboard/billing", icon: "💳" },
    { name: "Reports", path: "/dashboard/reports", icon: "📈" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col">
        <div className="p-6 flex-1">
          <Link href="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="text-xl font-bold">VOLTPAY</span>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  pathname === item.path
                    ? "bg-green-600 text-white shadow-lg shadow-green-600/30"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="p-6 border-t border-gray-200">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition w-full"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-sm">Alex Bright</div>
                <div className="text-xs text-gray-500">Standard Plan</div>
              </div>
              <span className="text-gray-400">⋮</span>
            </button>

            {showUserMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <Link
                  href="/dashboard/settings"
                  className="block px-4 py-3 hover:bg-gray-50 transition text-sm"
                  onClick={() => setShowUserMenu(false)}
                >
                  ⚙️ Settings
                </Link>
                <Link
                  href="/onboarding/plans"
                  className="block px-4 py-3 hover:bg-gray-50 transition text-sm"
                  onClick={() => setShowUserMenu(false)}
                >
                  📋 Change Plan
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 hover:bg-red-50 transition text-sm text-red-600"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search analytics or bills..."
                  className="w-full px-4 py-2.5 pl-11 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
                <span className="absolute left-4 top-3 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition">
                <span className="text-xl">🔔</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
