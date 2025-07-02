import Navbar from "@/components/Navbar";

interface RootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
