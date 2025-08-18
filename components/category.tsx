
'use client';

import React, { useState } from "react";

const categories = [
  { id: "new-for-you", label: "جدید برای شما" },
  { id: "trending", label: "تماشاینده" },
  { id: "recently-uploaded", label: "اخیراً بارگذاری‌شده" },
  { id: "cooking", label: "آشپزی" },
  { id: "fitness", label: "تناسب اندام" },
  { id: "math", label: "ریاضیات" },
  { id: "live", label: "زنده" },
  { id: "games", label: "بازی" },
  { id: "podcasts", label: "پادکست‌ها" },
  { id: "gaming", label: "گیمینگ‌ها" },
  { id: "music", label: "موسیقی" },
  { id: "all", label: "همه", active: true },
];

export const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div className="flex gap-2 py-3 px-4 overflow-x-auto justify-end  mr-24" aria-label="Categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`capitalize whitespace-nowrap rounded-xl px-4 py-2 text-sm ${
            activeCategory === cat.id
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-900"
          } focus:outline-none `}
          aria-pressed={activeCategory === cat.id ? true : false}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};