import { useState, useEffect } from "react";
import { brandsData, searchTypesData, sortByData } from "./Data";
const BrandsFilter = ({ brands, brandsSelected, setBrandsSelected }) => {
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [tempBrands, setTempBrands] = useState(brands);
  const selectBrand = (value) => {
    setTempBrands(
      tempBrands.includes(value)
        ? tempBrands.filter((brand) => brand !== value)
        : [...tempBrands, value]
    );
  };

  const applyFilter = () => {
    setBrandsDropdown(false);
    setBrandsSelected(tempBrands);
  };

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.target.closest("#brandsFilterSection")) {
        setBrandsDropdown(false);
      }
    });
    return () => {
      document.body.removeEventListener("click", (e) => {
        if (!e.target.closest("#brandsFilterSection")) {
          setBrandsDropdown(false);
        }
      });
    };
  });

  return (
    <div id="brandsFilterSection">
      <button
        type="button"
        id="brandsFilter"
        className="text-xs p-1 px-2 h-9 border border-neutral-400 bg-white shadow rounded inline-flex gap-1 items-center hover:border-accent hover:text-accent"
        onClick={() => {
          setBrandsDropdown(true);
          setTempBrands(brandsSelected);
        }}
      >
        Filter by brands
        {brandsSelected.length > 0 && (
          <span className="bg-accent text-white p-1 px-1.5 rounded-sm font-semibold">
            {brandsSelected.length}
          </span>
        )}
      </button>
      {brandsDropdown && (
        <div
          id="brandsDropdown"
          className="flex gap-2 flex-col text-xs bg-white rounded shadow-xl w-full max-w-[500px] h-64 absolute z-50 top-11 overflow-hidden justify-between border animate-swipe-up"
        >
          <div className="flex justify-between items-center w-full p-3 py-2 text-xs border-b bg-slate-50 font-semibold text-neutral-950">
            Select brands
            <button
              className=""
              type="button"
              onClick={() => setBrandsDropdown(false)}
            >
              <img
                src="/assets/svg-icons/close.svg"
                alt=""
                width={18}
                className="contrast-50"
              />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 overflow-y-auto">
            {brands.map((brand, index) => (
              <div className="" key={index}>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="bg-white border-2 focus:outline-accent focus-visible:outline-accent border-accent rounded cursor-pointer outline-accent outline-offset-2 hover:outline hover:outline-2 checked:bg-accent"
                    value={brand.value}
                    checked={tempBrands.includes(brand.value)}
                    onChange={() => selectBrand(brand.value)}
                  />
                  {brand.label}
                </label>
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-3 justify-end bg-slate-50 border-t">
            <button
              type="button"
              className="bg-white p-1.5 px-3 shadow rounded hover:text-accent"
              onClick={() => setTempBrands([])}
            >
              Clear All
            </button>
            <button
              type="button"
              className="bg-accent p-1.5 px-3 text-white rounded shadow hover:bg-neutral-700"
              onClick={applyFilter}
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SortByFilter = ({ sortBy }) => (
  <select
    className="text-xs rounded shadow border border-neutral-400"
    aria-placeholder="Sort by"
  >
    <option value="" disabled>
      Sort by
    </option>
    {sortBy.map((sort, index) => (
      <option key={index} value={sort.value}>
        {sort.label}
      </option>
    ))}
  </select>
);

const SearchBar = ({ searchTypes }) => (
  <div className="flex shadow">
    <input
      type="text"
      className="text-xs rounded-l border border-neutral-400 shadow-inner w-36 sm:w-auto"
      placeholder="Type here..."
    />
    <select
      className="text-xs border-y border-x-0 rounded-none border-neutral-400"
      aria-placeholder="Search type"
    >
      <option value="" disabled>
        Search type
      </option>
      {searchTypes.map((type, index) => (
        <option key={index} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
    <button
      type="button"
      className="text-xs p-2 rounded-r items-center bg-accent text-white font-medium shadow hover:bg-neutral-700 inline-flex gap-1"
    >
      Search
      <img
        src="/assets/svg-icons/search.svg"
        alt="search"
        width={16}
        className="invert hidden sm:inline-block"
      />
    </button>
  </div>
);

const Filters = () => {
  const [brandsSelected, setBrandsSelected] = useState([]);

  return (
    <div className="flex gap-3 mt-4 flex-wrap relative justify-between">
      <div className="flex gap-3 flex-wrap">
        <BrandsFilter
          brands={brandsData}
          brandsSelected={brandsSelected}
          setBrandsSelected={setBrandsSelected}
        />
        <SortByFilter sortBy={sortByData} />
      </div>
      <SearchBar searchTypes={searchTypesData} />
    </div>
  );
};

export default Filters;
