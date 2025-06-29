import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('font-headline text-2xl font-bold', className)}>
    Fanal<span className="text-accent">Coque</span>
  </div>
);

export default Logo;
