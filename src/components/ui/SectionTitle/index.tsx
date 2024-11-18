import { cn } from "@/lib/utils";

const titleSizes = {
  h1: "text-[clamp(2.625rem,2.292rem+1.67vw,3.75rem)]",
  h2: "text-[clamp(2.25rem,2.176rem+0.37vw,2.5rem)]",
  h3: "text-[clamp(1.625rem,1.551rem+0.37vw,1.875rem)]",
  h4: "text-[clamp(1.125rem,1.088rem+0.19vw,1.25rem))]",
};

type SectionTitleProps = {
  as?: React.ElementType;
  size?: keyof typeof titleSizes;
  className?: string;
  children: React.ReactNode;
};

export default function SectionTitle({
  as: Comp = "h1",
  className,
  size = "h1",
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Comp
      className={cn("font-medium leading-none", titleSizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
