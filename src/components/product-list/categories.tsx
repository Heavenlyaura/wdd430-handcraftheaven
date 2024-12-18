"use client";
import { zillaSlab } from "@/app/fonts/fonts";
import { Category, ComponentProps } from "@/library/definitions";
import { useRouter } from "next/navigation";

export default function Categories({ categories }: ComponentProps) {
  const router = useRouter();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    if (selectedCategory !== "Select") {
      router.push(`?category=${selectedCategory}`);
    }
  };

  return (
    <section
      className={`flex flex-col items-center gap-4 justify-center md:flex-row md:justify-between ${zillaSlab.className} antialiased p-4 px-6`}
    >
      <div className="font-bold text-3xl">Products</div>
      <div className="flex p-4 w-fit border border-[#964B00] rounded-3xl">
        <p>Sort By:</p>
        <select
          name="categories"
          id="categories"
          className="bg-[#F9F5EA]"
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
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
