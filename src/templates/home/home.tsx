import { HeroSection, WelcomeSection, GroupSection } from "./sections";

export function HomePage() {
  return (
    <main className="flex flex-col relative">
      <HeroSection />
      <WelcomeSection />
      <GroupSection />
    </main>
  );
}
