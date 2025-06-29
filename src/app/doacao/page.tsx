import { DollarSign, CreditCard, Heart, Users, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';

export default function DoacaoPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Faça a Diferença. Doe Agora!
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Sua doação é a força que impulsiona nossos projetos e transforma vidas na comunidade do Coque. Cada contribuição, de qualquer valor, nos ajuda a construir um futuro mais justo e cheio de oportunidades.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">Escolha como Apoiar</CardTitle>
            <CardDescription>Sua generosidade ilumina caminhos.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pontual" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pontual">
                  <DollarSign className="mr-2 h-4 w-4" /> Doação Pontual
                </TabsTrigger>
                <TabsTrigger value="recorrente">
                  <Heart className="mr-2 h-4 w-4" /> Doação Recorrente
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pontual" className="mt-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Faça uma contribuição única para apoiar nossas causas imediatas.</p>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <Button variant="outline" size="lg" className="text-lg">R$ 25</Button>
                    <Button variant="outline" size="lg" className="text-lg">R$ 50</Button>
                    <Button size="lg" className="text-lg bg-accent text-accent-foreground hover:bg-accent/90">R$ 100</Button>
                    <Button variant="outline" size="lg" className="text-lg">R$ 200</Button>
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    <CreditCard className="mr-2 h-5 w-5" /> Doar com PagSeguro ou PayPal
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="recorrente" className="mt-6">
                 <div className="text-center">
                  <p className="text-muted-foreground mb-4">Torne-se um doador mensal e garanta a continuidade de nossos projetos a longo prazo.</p>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <Button variant="outline" size="lg" className="text-lg">R$ 15/mês</Button>
                    <Button variant="outline" size="lg" className="text-lg">R$ 30/mês</Button>
                    <Button size="lg" className="text-lg bg-accent text-accent-foreground hover:bg-accent/90">R$ 50/mês</Button>
                    <Button variant="outline" size="lg" className="text-lg">R$ 100/mês</Button>
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    <Heart className="mr-2 h-5 w-5" /> Quero ser um Doador Recorrente
                  </Button>
                 </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        <section className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">
                Outras Formas de Ajudar
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
                O apoio financeiro é essencial, mas existem muitas outras maneiras de contribuir para nossa causa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="text-left">
                    <CardHeader>
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                            <Users className="h-6 w-6" />
                        </div>
                        <CardTitle>Seja Voluntário</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Seu tempo e talento são preciosos. Junte-se a nós em mutirões, eventos e no dia a dia dos nossos projetos. Sua presença faz toda a diferença.</p>
                        <Button asChild variant="link" className="p-0 mt-4">
                            <Link href="/contato">Entre em contato</Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="text-left">
                    <CardHeader>
                      <div className="flex flex-row items-center gap-4">
                         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                            <Gift className="h-6 w-6" />
                        </div>
                        <CardTitle>Doe Itens</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Arrecadamos alimentos não perecíveis, roupas em bom estado e material escolar. Sua doação material apoia diretamente as famílias da comunidade.</p>
                         <Button asChild variant="link" className="p-0 mt-4">
                            <Link href="/contato">Saiba como doar</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
    </div>
  );
}
