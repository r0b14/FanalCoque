import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { partners } from '@/lib/data';
import Link from 'next/link';

export default function ParceirosPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Nossos Parceiros
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Agradecemos a todas as empresas, ONGs e órgãos públicos que acreditam e apoiam nossa causa.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <Link href="#" key={partner.id}>
                <Card className="group flex h-full items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                    <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="h-20 w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    data-ai-hint="company logo"
                    />
                </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
