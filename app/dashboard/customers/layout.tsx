import { lusitana } from '@/app/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-4">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-white` }>
        Customer
        </h1>
        </div>
        <div className="grid gap-6 space-y-4"> {children} </div>
    </div>
  );
}