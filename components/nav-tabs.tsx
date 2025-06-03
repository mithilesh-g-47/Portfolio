'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Projects & Experience', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-center">
          <div className="flex items-center space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === tab.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
} 