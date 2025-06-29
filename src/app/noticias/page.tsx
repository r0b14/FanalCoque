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
import { ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { newsItems } from '@/lib/data';

export default function NoticiasPage() {
  const categories = [...new Set(newsItems.map(item => item.category))];

  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Notícias da Comunidade
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mantenha-se informado sobre os últimos acontecimentos, projetos e histórias do Coque e região.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 rounded-lg bg-card p-4 shadow-sm md:flex-row md:items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Buscar por título..." className="w-full pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-full md:w-auto">Buscar</Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              id={String(item.id)}
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
                  {item.title}
                </CardTitle>
                <p className="mb-4 text-sm text-muted-foreground">{item.date}</p>
                <p className="text-sm text-foreground/80 line-clamp-3">{item.content}</p>
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
      </main>
    </div>
  );
}
