"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const footer = (
        <footer className="w-full py-3 px-4 border-t border-divider bg-background/80 text-xs text-default-500 text-center">
            © {new Date().getFullYear()} Doodle UI. All rights reserved.
        </footer>
    );

    return (
        <div className="relative flex flex-col h-screen bg-background">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
                <main className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'ml-0' : ''
                    }`}>
                    <div className="container mx-auto px-4 py-6 max-w-none">
                        {children}
                        {/* {footer} */}
                    </div>
                </main>
            </div>
        </div>
    );
} 