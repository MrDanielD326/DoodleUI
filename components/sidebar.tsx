"use client";

import React, { useState } from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Divider } from "@heroui/react";

function toPath(item: string) {
  return "/" + item.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

/**
 * Sidebar component
 * @param forceShow - If true, sidebar is always shown (e.g., in mobile menu/drawer)
 */
export default function Sidebar({ forceShow = false, collapsed, setCollapsed }: { forceShow?: boolean, collapsed?: boolean, setCollapsed?: (v: boolean) => void }) {
  const [search, setSearch] = useState("");
  const filteredItems = (siteConfig.navItems).filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  const pathname = usePathname();

  function handleItemClick() {
    if (forceShow) {
      // Try to close the NavbarMenu by simulating a click on the menu toggle button
      const toggle = document.querySelector('[data-slot="menu-toggle"]') as HTMLElement;
      if (toggle) toggle.click();
    }
  }

  return (
    <>
      <aside className={`${forceShow ? "flex w-full" : "hidden md:flex w-48"} h-full bg-background flex-col ${collapsed ? 'w-14' : ''}`}>
        <div className="flex items-center gap-2 pb-2 pt-2">
          <Input
            aria-label="Search"
            classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
            className={`flex-1 ${collapsed ? 'hidden' : ''}`}
            labelPlacement="outside"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            size="sm"
            endContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <button
            aria-label={collapsed ? 'Open sidebar' : 'Close sidebar'}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden md:inline-flex"
            onClick={() => setCollapsed && setCollapsed(!collapsed)}
          >
            {collapsed ? '→' : '←'}
          </button>

        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 pb-4">
            {filteredItems.map((item) => (
              <li key={item}>
                {!collapsed && (
                  <Link
                    href={toPath(item)}
                    className={`block w-full text-left px-3 py-1 text-sm transition-all
                   ${pathname === toPath(item)
                        ? 'bg-primary text-white shadow-md font-semibold'
                        : 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-lg'}
                   `.replace(/border(-[a-z]+)?(-[a-z]+)?/g, '')}
                    onClick={handleItemClick}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
            {filteredItems.length === 0 && !collapsed && (
              <li className="text-xs text-gray-400 px-3 py-2">No results found.</li>
            )}
          </ul>
        </nav>
      </aside>
      {!collapsed && <Divider orientation="vertical" />}
    </>
  );
} 