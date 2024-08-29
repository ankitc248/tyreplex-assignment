import { useState } from "react";
import Spinner from "../../Spinner";
import { tyresData } from "./Data";
import TyreCard from "./TyreCard";
import Filters from "./Filters";

export default function Tyres() {
  const [tyres, setTyres] = useState(tyresData);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTyres([...tyres, ...tyres]);
    }, 2000);
  };

  return (
    <section className="rounded bg-white shadow overflow-hidden p-4">
      <h3 className="text-xl font-medium">Tyres available</h3>
      <p className="text-xs text-neutral-500">Find the best tyre for you</p>
      <Filters />
      <ul className="grid grid-cols-1 gap-4 mt-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tyres.map((tyre) => (
          <TyreCard key={tyre.id} tyre={tyre} />
        ))}
      </ul>
      <div className="flex justify-center sm:justify-end">
        <button
          type="button"
          className="group mt-4 inline-flex bg-white border border-neutral-500 p-1 rounded-sm px-4 text-xs font-medium hover:text-accent hover:border-accent gap-1"
          onClick={loadMore}
        >
          Load more {loading && <Spinner />}
        </button>
      </div>
    </section>
  );
}
