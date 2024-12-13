import { useState } from "react";
import { zillaSlab } from "@/app/fonts/fonts";

export default function Categories() {
  return (
    <section
      className={`flex justify-between ${zillaSlab.className} antialiased p-6`}
    >
      <div className="font-bold text-3xl">Products</div>
      <div className="flex p-4 w-fit border rounded-3xl">
        <p>Sort By:</p>
        <select name="categories" id="categories">
          <option value="Jewelry">Jewelry</option>
          <option value="Furniture">Furniture</option>
          <option value="Textiles">Textiles</option>
          <option value="Art">Art</option>
          <option value="Bags">Bags</option>
          <option value="Ceramics">Ceramics</option>
        </select>
      </div>
    </section>
  );
}
