import { Marquee } from "@/components/ui/marquee";
import { getData } from "@/lib/getData"; // adjust as needed

export default async function MarqueeDemo() {
  const entries = await getData({
    contentType: "marquee",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const logos = entries?.[0]?.marquee_icons?.icon_logo ?? [];

  return (
    <Marquee>
      {logos.map((logo: { url: string; title?: string }, index: number) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
        >
          <img
            src={logo.url}
            alt={logo.title || `Logo ${index + 1}`}
            className="h-[40px] w-auto"
            loading="lazy"
          />
        </div>
      ))}
    </Marquee>
  );
}
