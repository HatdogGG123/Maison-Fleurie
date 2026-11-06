import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <section className="flex gap-2 items-center border border-black w-fit p-2">
      <Search strokeWidth={1} className="size-5 text-black/80" />
      <input
        type="text"
        placeholder="Search bouquets and more..."
        className="w-100"
      />
    </section>
  );
};

export default SearchBar;
