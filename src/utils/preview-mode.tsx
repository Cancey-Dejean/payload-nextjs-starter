"use client";

import Link from "next/link";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/Button";

export const PreviewMode: React.FC = () => {
  return (
    <div className="bg-black text-white fixed bottom-0 w-full py-7">
      <Container className="flex items-center justify-between">
        <p className="text-2xl">Preview Mode Enabled:</p>
        <Button asChild variant="secondary">
          <Link href="/api/exit-preview">Exit Preview</Link>
        </Button>
      </Container>
    </div>
  );
};
