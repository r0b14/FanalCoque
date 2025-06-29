import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="Fanal Coque Logo"
    width={180}
    height={180}
    className={cn('h-12 w-auto', className)}
    priority
  />
);

export default Logo;
