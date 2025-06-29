import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Lightbulb, Target, HeartHandshake } from 'lucide-react';

export default function QuemSomosPage() {
  return (
    <div className="bg-background">
      <header className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold md:text-5xl">
            Quem Somos
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Somos um farol de esperança e um catalisador de mudanças, movidos pela força da nossa comunidade.
          </p>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="p-6">
              <HeartHandshake className="mx-auto mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-2 font-headline text-2xl font-bold">Nossa Missão</h2>
              <p className="text-muted-foreground">Ser um farol (fanal) oferecendo direção, recursos e voz para os moradores, focando em transformação social e cidadania ativa.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="mx-auto mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-2 font-headline text-2xl font-bold">Nossa Visão</h2>
              <p className="text-muted-foreground">Uma comunidade empoderada, com infraestrutura digna, oportunidades para todos e uma voz ativa nas decisões que a afetam.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Lightbulb className="mx-auto mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-2 font-headline text-2xl font-bold">Nossos Valores</h2>
              <p className="text-muted-foreground">Respeito, colaboração, transparência, resiliência e protagonismo comunitário.</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
            A Equipe por Trás do Projeto
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-56 w-full object-cover"
                  data-ai-hint={member.imageHint}
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
