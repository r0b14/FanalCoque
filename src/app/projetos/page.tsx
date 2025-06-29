import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { socialProjects } from '@/lib/data';

export default function ProjetosPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Nossos Projetos Sociais
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Conheça as iniciativas que estão fazendo a diferença e transformando a realidade da nossa comunidade.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="space-y-16">
          {socialProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
                index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="mb-4 font-headline text-3xl font-bold text-primary">
                  {project.name}
                </h2>
                <p className="mb-6 text-foreground/80">{project.description}</p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-accent-foreground">Resultados Alcançados:</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">{project.results}</p>
                  </div>
                   <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">Promoção de colaboração e esperança na comunidade.</p>
                  </div>
                </div>
              </div>
              <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-xl"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
