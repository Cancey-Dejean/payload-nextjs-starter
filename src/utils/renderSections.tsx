import Hero from "@/blocks/Hero";
import RichText from "@/blocks/RichText";

export const RenderSections = (section: any) => {
  const { blockType, id, ...rest } = section;

  switch (blockType) {
    case "hero":
      return <Hero {...rest} key={id} />;
    case "richText":
      return <RichText {...rest} key={id} />;

    default:
      return <div>Need to add content to page</div>;
  }
};
