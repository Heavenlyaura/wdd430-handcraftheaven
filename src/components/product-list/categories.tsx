import { useState } from "react";
import { zillaSlab } from "@/app/fonts/fonts";
import { Category, ComponentProps } from "@/library/definitions";

export default function Categories({ categories }: ComponentProps) {
  return (
    <section
      className={`flex justify-between ${zillaSlab.className} antialiased p-6`}
    >
      <div className="font-bold text-3xl">Products</div>
      <div className="flex p-4 w-fit border rounded-3xl">
        <p>Sort By:</p>
        <select name="categories" id="categories">
          {categories.map((category: Category, index: number) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
