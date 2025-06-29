'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'text-sm font-medium transition-colors hover:text-accent',
          isActive
            ? 'text-accent'
            : 'text-primary-foreground/80 hover:text-primary-foreground'
        )}
      >
        {children}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'block rounded-md p-3 text-base font-medium transition-colors',
          isActive
            ? 'bg-accent/20 text-accent'
            : 'text-primary hover:bg-muted'
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-sm backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <Logo className="text-primary-foreground" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar..." className="w-40 pl-9 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60" />
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Doe Agora
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background p-4">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </div>
              <div className="mt-8 space-y-4">
                {navLinks.map((link) => (
                    <MobileNavLink key={link.href} href={link.href}>
                      {link.label}
                    </MobileNavLink>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar..." className="w-full pl-9" />
                  </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Doe Agora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
