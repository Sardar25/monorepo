'use client'
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Home() {
  const [items, setItems] = useState<Array<{id:number; name:string}>>([]);
  useEffect(() => {
    fetch('http://localhost:7000/api/items')
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

        <section className="mt-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Items from API</h2>
          {items.length === 0 ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            <ul className="list-disc pl-6 space-y-2">
              {items.map((item) => (
                <li key={item.id} className="text-lg">{item.name}</li>
              ))}
            </ul>
          )}
        </section>
    </div>
  );
}
