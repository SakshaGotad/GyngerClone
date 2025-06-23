import { getData } from "@/lib/getData";
import HeroClient from "../HeroClient";

export default async function HeroSection() {
  const response = await getData({
    contentType: "hero_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const data = response?.[0];

  return <HeroClient data={data} />;
}
