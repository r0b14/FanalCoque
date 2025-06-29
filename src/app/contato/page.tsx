import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ContatoPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tem alguma dúvida, sugestão ou quer colaborar? Fale conosco!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Seu sobrenome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da mensagem" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold text-primary">Nossas Informações</h2>
            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">Endereço</h3>
                  <p>Rua da Esperança, 123</p>
                  <p>Coque, Recife - PE, 50000-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a href="mailto:contato@fanalcoque.org" className="hover:text-accent">
                    contato@fanalcoque.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary">Telefone / WhatsApp</h3>
                  <a href="tel:+5581999998888" className="hover:text-accent">
                    (81) 99999-8888
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
