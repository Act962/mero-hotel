import { AccommodationLayout } from "@/components/layout/accommodation-layout";
import { AccommodationPage } from "@/templates/accommodation";

export default function Home() {
  return (
    <AccommodationLayout>
      <AccommodationPage />
    </AccommodationLayout>
  );
}
