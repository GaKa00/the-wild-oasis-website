"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1 &mdash; 3guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4 &mdash; 7guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8 &mdash; 12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children } : ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 
          ${activeFilter === filter ? "bg-primary-600" : ""}`}
      onClick={() => handleFilter(filter)}>
      {children}
    </button>
  );
}
