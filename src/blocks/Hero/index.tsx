import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { ButtonLink, SimpleImage } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  headline,
  text,
  button,
  image,
}: {
  headline: string;
  className?: string;
  text?: string;
  button?: ButtonLink[];
  image: SimpleImage;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="bg-white py-20">
      <Container className="grid grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-4">
          <SectionTitle
            as="h1"
            className="col-span-5 col-start-1 flex max-w-[531px] items-end leading-[1.1]"
          >
            {headline}
          </SectionTitle>

          {text && <p>{text}</p>}

          {button && (
            <div className="flex items-center gap-4">
              {button?.map(({ button }, index) => (
                <Button variant={button.variant} asChild key={index}>
                  <Link
                    href={button.url || "/"}
                    target={button.newTab ? "_blank" : "_self"}
                    rel={button.newTab ? "noopener noreferrer" : undefined}
                  >
                    {button.label}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="relative h-[515px] w-full">
            <Image
              src={image.url}
              alt={image.alt}
              priority
              fill
              className="object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
