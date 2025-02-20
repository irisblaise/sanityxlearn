'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering navigation links until mounted
  if (!mounted) {
    return null;
  }

  const navigation = [
    { name: 'Artworks', href: '/artworks' },
    { name: 'Artists', href: '/artists' },
    { name: 'Exhibitions', href: '/exhibitions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold text-zinc-900">
              Gallery
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const isActive = 
                  item.href === '/' 
                    ? pathname === '/' 
                    : pathname.startsWith(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'text-zinc-900'
                        : 'text-zinc-500 hover:text-zinc-900'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
