"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const PreviewMode: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black py-7 text-white">
      <Container className="flex items-center justify-between">
        <p className="text-2xl">Preview Mode Enabled:</p>
        <Button asChild variant="secondary">
          <Link href="/api/exit-preview">Exit Preview</Link>
        </Button>
      </Container>
    </div>
  );
};
