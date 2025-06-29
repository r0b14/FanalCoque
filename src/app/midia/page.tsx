import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Podcast, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { media } from '@/lib/data';

export default function MidiaPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold text-primary md:text-5xl">
            Mídia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ouça nossos podcasts e assista aos vídeos para se aprofundar nas histórias e ações da comunidade.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="podcast" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2">
            <TabsTrigger value="podcast">
              <Podcast className="mr-2 h-4 w-4" /> Podcast
            </TabsTrigger>
            <TabsTrigger value="videos">
              <Video className="mr-2 h-4 w-4" /> Vídeos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="podcast" className="mt-8">
            <div className="space-y-6">
              {media.podcast.map(episode => (
                <Card key={episode.id} className="flex flex-col items-start gap-4 p-4 transition-shadow hover:shadow-md sm:flex-row sm:items-center">
                  <div className="flex flex-grow items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Podcast className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{episode.title}</h3>
                      <p className="text-sm text-muted-foreground">{episode.date} &middot; {episode.duration}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <PlayCircle className="mr-2 h-4 w-4" /> Ouvir
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {media.videos.map(video => (
                <Card key={video.id} className="group overflow-hidden">
                  <div className="relative">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      width={600}
                      height={400}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={video.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                       <PlayCircle className="h-12 w-12 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
