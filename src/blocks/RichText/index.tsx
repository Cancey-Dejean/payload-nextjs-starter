import React from "react";

import { serializeLexical } from "@/utils/serialize";

type Props = {
  className?: string;
  content: Record<string, any>;
  enableGutter?: boolean;
  enableProse?: boolean;
};

const RichText: React.FC<Props> = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className="prose max-w-full">
      {serializeLexical({ nodes: content.root.children })}
    </div>
  );
};

export default RichText;
