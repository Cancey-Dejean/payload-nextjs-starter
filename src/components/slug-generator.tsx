"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { slugify } from "@/utils/slugify";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState<"title" | "slug" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const copyToClipboard = async (text: string, type: "title" | "slug") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="field-type text">
        <label className="field-label" htmlFor="field-input">
          Title & Slug Generator
        </label>
        <input
          id="field-input"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter title"
          className="w-full"
        />
      </div>

      {input && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "4px",
              }}
            >
              <strong>Title:</strong>{" "}
              <span style={{ color: "rgb(235, 235, 235)" }}>{input}</span>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(input, "title")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              {copied === "title" ? (
                <>
                  <Check
                    style={{ color: "#fff", width: "16px", height: "16px" }}
                  />
                  Title copied
                </>
              ) : (
                <>
                  <Copy
                    style={{ color: "#fff", width: "16px", height: "16px" }}
                  />
                  Copy to clipboard
                </>
              )}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "4px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "4px",
              }}
            >
              <strong>Slug:</strong>

              <span style={{ color: "rgb(235, 235, 235)" }}>
                {slugify(input)}
              </span>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(slugify(input), "slug")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              {copied === "slug" ? (
                <>
                  <Check
                    style={{ color: "#fff", width: "16px", height: "16px" }}
                  />
                  Slug copied
                </>
              ) : (
                <>
                  <Copy
                    style={{ color: "#fff", width: "16px", height: "16px" }}
                  />
                  Copy to clipboard
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
