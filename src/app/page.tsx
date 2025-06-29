import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, PlayCircle, Users } from 'lucide-react';
import { newsItems, opportunities, partners } from '@/lib/data';

export default function Home() {
  const latestNews = newsItems.slice(0, 3);
  const latestOpportunities = opportunities.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Comunidade do Coque"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-20"
          data-ai-hint="community resilience"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              Fanal Coque
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 drop-shadow-md md:text-xl">
              Iluminando caminhos, transformando vidas.
            </p>
            <Button
              asChild
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              size="lg"
            >
              <Link href="/oportunidades">Veja as Oportunidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto -mt-16 px-4">
        {/* Notícias Section */}
        <section className="py-12 md:py-16">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
            Últimas Notícias
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <Card
                key={item.id}
                className="flex transform flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                  <CardTitle className="mb-2 text-xl font-bold leading-tight">
                    <Link
                      href={`/noticias#${item.id}`}
                      className="hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground">{item.date}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/noticias#${item.id}`}>
                      Leia mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/noticias">Ver todas as notícias</Link>
            </Button>
          </div>
        </section>

        {/* Oportunidades Section */}
        <section className="rounded-lg bg-card py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Oportunidades em Destaque
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestOpportunities.map((op) => (
                <Card
                  key={op.id}
                  className="flex transform flex-col rounded-lg border-l-4 border-accent shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="flex-grow p-6">
                    <Badge className="mb-3 bg-accent/20 text-accent-foreground hover:bg-accent/30">
                      {op.type}
                    </Badge>
                    <h3 className="mb-2 text-lg font-semibold">{op.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {op.organization}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      variant="link"
                      className="p-0 text-accent-foreground"
                    >
                      <Link href="/oportunidades">
                        Saber mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/oportunidades">Ver todas as oportunidades</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:py-16">
          {/* Podcast Section */}
          <section>
            <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Nosso Podcast
            </h2>
            <Card className="overflow-hidden shadow-lg">
              <div className="flex flex-col items-center justify-center bg-primary p-8 text-center text-primary-foreground md:flex-row md:text-left">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Capa do Podcast"
                  width={150}
                  height={150}
                  className="h-32 w-32 rounded-lg object-cover shadow-2xl md:h-40 md:w-40"
                  data-ai-hint="podcast cover"
                />
                <div className="mt-6 md:ml-8 md:mt-0">
                  <h3 className="font-headline text-2xl font-bold">
                    Vozes do Coque
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Episódio #23: Empreendedorismo na comunidade
                  </p>
                  <Button asChild variant="secondary" className="mt-4">
                    <Link href="/midia">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Ouvir Agora
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Parceiros Section */}
          <section>
            <h2 className="mb-8 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Nossos Parceiros
            </h2>
            <div className="rounded-lg bg-card p-8 shadow-lg">
              <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-3">
                {partners.slice(0, 6).map((partner) => (
                  <div key={partner.id} className="grayscale transition hover:grayscale-0">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="h-16 object-contain"
                      data-ai-hint="company logo"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/parceiros">Ver todos</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mb-12 rounded-lg bg-primary py-12 text-center text-primary-foreground md:py-16">
          <div className="container mx-auto px-4">
            <Users className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Faça parte da mudança!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Sua contribuição, seja por doação ou voluntariado, fortalece nossa
              comunidade e ilumina mais caminhos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Doe Agora
              </Button>
              <Button size="lg" variant="secondary">
                Seja Voluntário
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
