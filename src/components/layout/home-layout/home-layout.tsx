import { Footer } from "@/components/footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <main className="h-full flex flex-col"> {children} </main>
      <Footer />
    </div>
  );
}
