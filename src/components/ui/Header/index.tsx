import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/container";

type LogoType = "main";

// const logos: Record<LogoType, React.FC<React.SVGProps<SVGSVGElement>>> = {
//   main: LogoMain,
// };

export default function Header({ logoType = "main" }: { logoType?: LogoType }) {
  return (
    <header className="sticky top-0 z-50 flex h-[90px] items-center px-9">
      <Container className="flex items-center justify-between gap-4">
        <Link href="/">
          {/* {logos[logoType]({})} */}
          Logo
          <span className="sr-only">Logo</span>
        </Link>

        <div className="flex grow justify-center">
          <nav role="navigation">
            <ul className="flex items-center gap-4">
              <li>
                <Button asChild variant="ghost">
                  <Link href="/">Link 1</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href="/">Link 2</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href="/">Link 3</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  );
}
