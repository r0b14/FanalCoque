import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Logo from '@/components/logo';
import { navLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Iluminando caminhos, transformando vidas na comunidade.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Rua da Esperança, 123</li>
              <li>Coque, Recife - PE</li>
              <li className="pt-2">
                <a href="mailto:contato@fanalcoque.org" className="hover:text-accent">contato@fanalcoque.org</a>
              </li>
              <li>
                <a href="tel:+5581999998888" className="hover:text-accent">(81) 99999-8888</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fanal Coque. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
