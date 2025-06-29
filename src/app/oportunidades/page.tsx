import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { opportunities } from '@/lib/data';

const OpportunityCard = ({ opportunity }: { opportunity: (typeof opportunities)[0] }) => (
  <Card className="flex flex-col shadow-md transition-shadow hover:shadow-lg">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{opportunity.title}</CardTitle>
      <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-foreground/80">{opportunity.description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="link" className="p-0 text-accent-foreground">
        Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

export default function OportunidadesPage() {
  const vagas = opportunities.filter(op => op.type === 'Vaga de Emprego');
  const cursos = opportunities.filter(op => op.type === 'Curso e Capacitação');
  const editais = opportunities.filter(op => op.type === 'Edital e Programa');

  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Mural de Oportunidades
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Encontre vagas de emprego, cursos de capacitação e editais que podem impulsionar sua carreira e seus projetos.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="vagas" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="vagas">
              <Briefcase className="mr-2 h-4 w-4" /> Vagas de Emprego
            </TabsTrigger>
            <TabsTrigger value="cursos">
              <GraduationCap className="mr-2 h-4 w-4" /> Cursos e Capacitação
            </TabsTrigger>
            <TabsTrigger value="editais">
              <Award className="mr-2 h-4 w-4" /> Editais e Programas
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="vagas" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vagas.map(op => <OpportunityCard key={op.id} opportunity={op} />)}
            </div>
          </TabsContent>
          <TabsContent value="cursos" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cursos.map(op => <OpportunityCard key={op.id} opportunity={op} />)}
            </div>
          </TabsContent>
          <TabsContent value="editais" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {editais.map(op => <OpportunityCard key={op.id} opportunity={op} />)}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
