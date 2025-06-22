import { getData } from "@/lib/getData";
import { Marquee } from "../components/MarqueeClient";

export default async function MarqueeWrapper() {
  const entries = await getData({
    contentType: "marquee",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  
  const logos = entries?.[0]?.marquee_icons?.icon_logo ?? [];

  return <Marquee logos={logos} />;
}
