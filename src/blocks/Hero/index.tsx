import { Button } from "@/components/ui/button";
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
  ...props
}: {
  headline: string;
  className?: string;
  text?: string;
  button?: ButtonLink[];
  image: SimpleImage;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn("flex flex-col gap-20 bg-white pb-[64px]")}
      {...props}
    >
      <Container className="grid grid-cols-12">
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

        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            width={600}
            height={515}
            className="col-span-6 col-start-7 row-span-2 row-start-1"
            priority
          />
        )}

        {/* <div className="col-span-5 col-start-1 mt-9 flex flex-col items-start gap-9">
          {body && <p className="text-xl">{body}</p>}

          {button?.map(({ link }) => (
            <Button variant="dark" asChild key={link.label}>
              <Link
                href={link.url || "/"}
                target={link.newTab ? "_blank" : "_self"}
                rel={link.newTab ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </div> */}

        {/* {image && (
          <Image
            src={image.url}
            alt={image.alt}
            width={600}
            height={515}
            className="col-span-6 col-start-7 row-span-2 row-start-1"
            priority
          />
        )} */}
      </Container>
    </section>
  );
}
