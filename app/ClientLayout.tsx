"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow h-full overflow-hidden">
                <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
                <main className={`container mx-auto max-w-7xl pt-4 px-6 flex-grow h-full overflow-y-auto transition-all duration-200 ${sidebarCollapsed ? "ml-[-150px]" : ''}`}>
                    {children}
                </main>
            </div>
        </div>
    );
} 