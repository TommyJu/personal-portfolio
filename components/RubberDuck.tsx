"use client";

import Image from "next/image";
import { useState } from "react";
import { programmingQuotes } from "@/data/programmingQuotes";

export default function RubberDuck() {
  const [selectedQuote, setSelectedQuote] = useState<
    (typeof programmingQuotes)[number] | null
  >(null);

  function handleClick() {
    const availableQuotes = programmingQuotes.filter(
      (quote) => quote !== selectedQuote
    );

    const randomIndex = Math.floor(
      Math.random() * availableQuotes.length
    );

    setSelectedQuote(availableQuotes[randomIndex]);
  }

  return (
    <div className="pb-12 ml-auto flex gap-5 items-start">
      {selectedQuote && (
        <div className="mb-2 max-w-xs rounded-lg border p-4">
          <p className="text-sm">{selectedQuote.quote}</p>

          <p className="mt-2 text-xs opacity-60">
            — {selectedQuote.author}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        aria-label="Reveal a random programming quote"
        title="Click me for a programming quote!"
        className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
      >
        <Image
          src="/rubber_duck.png"
          alt=""
          width={80}
          height={80}
        />
      </button>
    </div>
  );
}