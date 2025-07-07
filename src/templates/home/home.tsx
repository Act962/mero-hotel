import {
  HeroSection,
  WelcomeSection,
  GroupSection,
  ExperiencesSection,
  AccommodationSection,
  LocationSection,
} from "./sections";

export function HomePage() {
  return (
    <main className="flex flex-col relative">
      <HeroSection />
      <WelcomeSection />
      <GroupSection />
      <ExperiencesSection />
      <AccommodationSection />
      <LocationSection />
    </main>
  );
}
