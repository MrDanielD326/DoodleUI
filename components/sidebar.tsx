"use client";

import React, { useState } from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

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

  // Only show the open/close button when collapsed and not forceShow
  if (collapsed && !forceShow) {
    return (
      <aside className="h-full bg-background/50 backdrop-blur-sm border-r border-divider flex flex-col items-center pt-4 transition-all duration-300 ease-in-out w-10">
        {!forceShow && (
          <button
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="p-2 rounded-lg hover:bg-default-100 transition-colors duration-200 flex-shrink-0"
            onClick={() => setCollapsed && setCollapsed(!collapsed)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 rotate-180`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </aside>
    );
  }

  return (
    <>
      <aside
        className={`
          ${forceShow ? "flex w-full" : "hidden md:flex w-44 border-r border-divider"}
          h-full bg-background/50 backdrop-blur-sm flex-col transition-all duration-300 ease-in-out
        `}
      >
        <div className="flex items-center gap-2 p-3 border-b border-divider">
          <div className="flex-1 transition-all duration-300">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-default-100 border-0",
                input: "text-sm"
              }}
              labelPlacement="outside"
              placeholder={forceShow ? "Search for a component here..." : "Search..."}
              value={search}
              onChange={e => setSearch(e.target.value)}
              size="sm"
              endContent={
                <SearchIcon className="text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          {!forceShow && (
            <button
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className="p-2 rounded-lg hover:bg-default-100 transition-colors duration-200 flex-shrink-0"
              onClick={() => setCollapsed && setCollapsed(!collapsed)}
            >
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            {filteredItems.map((item) => (
              <li key={item}>
                <Link
                  href={toPath(item)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${pathname === toPath(item)
                    ? 'bg-primary text-primary-foreground shadow-sm font-medium'
                    : 'text-foreground hover:bg-default-100'
                    }`}
                  onClick={handleItemClick}
                >
                  {item}
                </Link>
              </li>
            ))}
            {filteredItems.length === 0 && (
              <li className="text-xs text-default-400 px-3 py-2 text-center">No results found.</li>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
} 