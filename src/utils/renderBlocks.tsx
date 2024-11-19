import Hero from "@/blocks/Hero";

export const RenderBlocks = (section: any) => {
  const { blockType, id, ...rest } = section;

  switch (blockType) {
    case "hero":
      return <Hero {...rest} key={id} />;
  }
};
