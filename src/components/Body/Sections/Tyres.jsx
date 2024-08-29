import { useState } from "react";
import Select from "react-select";
import Spinner from "../../Spinner";
export default function Companies() {
  const brands = [
    { value: "MRF", label: "MRF" },
    { value: "Apollo", label: "Apollo" },
    { value: "JK Tyre", label: "JK Tyre" },
    { value: "CEAT", label: "CEAT" },
    { value: "Birla Tyres", label: "Birla Tyres" },
    { value: "BKT", label: "BKT" },
    { value: "TVS Tyres", label: "TVS Tyres" },
    { value: "Goodyear India", label: "Goodyear India" },
    { value: "Metro Tyres", label: "Metro Tyres" },
    { value: "MRL Tyres", label: "MRL Tyres" },
  ];
  const vehicleType = [
    { value: "car", label: "Car" },
    { value: "bike", label: "Bike" },
  ];
  const sortBy = [
    { value: "popular", label: "Most popular" },
    { value: "price-htl", label: "Price: High to Low" },
    { value: "price-lth", label: "Price: Low to High" },
    { value: "rating-lth", label: "Rating: Low to High" },
    { value: "rating-lth", label: "Rating: Low to High" },
  ];
  const [tyres, setTyres] = useState([
    {
      id: 1,
      brand: "apollo",
      vehicleType: "Car",
      name: "Amazer 4g life",
      image: "/assets/images/img_main.jpg",
      rating: 4.5,
      reviews: 10,
      price: "3,800",
      quantity: 1,
      warranty: 5,
      onSale: true,
      tubes: "Tubeless",
      size: "215/45R17",
    },
    {
      id: 2,
      brand: "apollo",
      vehicleType: "Car",
      name: "Amazer 4g life",
      image: "/assets/images/img_main.jpg",
      rating: 4.5,
      reviews: 10,
      price: "3,800",
      quantity: 1,
      warranty: 5,
      onSale: false,
      tubes: "Tubeless",
      size: "215/45R17",
    },
    {
      id: 3,
      brand: "apollo",
      vehicleType: "Car",
      name: "Amazer 4g life",
      image: "/assets/images/img_main.jpg",
      rating: 4.5,
      reviews: 10,
      price: "3,800",
      quantity: 1,
      warranty: 0,
      onSale: true,
      tubes: "Tubeless",
      size: "215/45R17",
      salePrice: "3,000",
    },
    {
      id: 3,
      brand: "apollo",
      vehicleType: "Car",
      name: "Amazer 4g life",
      image: "/assets/images/img_main.jpg",
      rating: 4.5,
      reviews: 10,
      price: "3,800",
      quantity: 1,
      warranty: 0,
      onSale: true,
      tubes: "Tubeless",
      size: "215/45R17",
      salePrice: "3,000",
    },
  ]);
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
      <h3 className="text-xl font-medium">Tyres sold</h3>
      <div className="flex gap-2 mt-4 flex-wrap">
        <Select
          options={brands}
          isSearchable={true}
          name="brand"
          className="basic-single w-56 text-sm"
          placeholder="Brand"
        />
        <Select
          options={vehicleType}
          name="brand"
          className="basic-single w-56 text-sm"
          defaultValue={vehicleType[0].label}
          placeholder="Vehicle type"
        />
        <Select
          options={sortBy}
          name="brand"
          className="basic-single w-56 text-sm"
          placeholder="Sort by"
        />
      </div>
      <ul className="grid grid-cols-1 gap-4 mt-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tyres.map((tyre) => (
          <TyreCard key={tyre.id} tyre={tyre} />
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          type="button"
          className="group mt-4 inline-flex bg-white border border-neutral-500 p-1 rounded px-4 text-xs font-medium hover:text-accent hover:border-accent gap-1"
          onClick={loadMore}
        >
          Load more {loading && <Spinner />}
        </button>
      </div>
    </section>
  );
}

const TyreCard = ({ tyre }) => {
  return (
    <li className="flex flex-col border border-neutral-300 rounded-md bg-white text-sm relative overflow-hidden justify-between hover:cursor-pointer hover:shadow hover:-translate-y-1 transition hover:border-accent">
      <div className="bg-accent/5 relative items-center justify-center flex py-6">
        <img
          src="/assets/images/img_main.png"
          alt="heart"
          width={100}
          className="drop-shadow"
        />
        <div className="absolute left-0 bottom-0 p-2 bg-white rounded-r-full overflow-hidden shadow-sm">
          <img src="/assets/images/apollo-logo.png" width={50} />
        </div>
      </div>
      <div className="flex bg-slate-100 flex-col p-2 items-start border-t gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-md font-medium uppercase pl-1">{tyre.name}</div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <div className="text-xs p-1 px-3 text-neutral-900 shadow bg-white rounded w-fit">
              {tyre.size}
            </div>
            <div className="text-xs p-1 px-3 text-neutral-900 shadow bg-white rounded w-fit">
              {tyre.tubes}
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <span className="inline-flex gap-1 text-white font-semibold bg-green-500 text-xs rounded-sm px-1 py-0.5 shadow-sm">
            {tyre.rating}
            <img
              src="/assets/svg-icons/star-blocky.svg"
              alt="star"
              className="invert"
              width={10}
              height={10}
            ></img>
          </span>
          <span className="text-xs font-bold text-neutral-500">
            {tyre.reviews} Ratings
          </span>
        </div>
        {tyre.salePrice ? (
          <div className="text-2xl text-neutral-800 flex gap-2 items-baseline">
            <span className="text-accent font-medium">₹{tyre.salePrice}</span>
            <span className="text-lg">
              <del>₹{tyre.price}</del>
            </span>
          </div>
        ) : (
          <div className="text-2xl font-medium text-neutral-800">
            ₹{tyre.price}
          </div>
        )}
        <div className="absolute top-0 right-0 flex flex-col items-end gap-1">
          {tyre.warranty > 0 && (
            <span className="inline-flex text-xs bg-yellow-400/75 p-1 pl-3 font-medium text-neutral-950 rounded-l-full gap-1">
              {tyre.warranty} years warranty{" "}
              <img
                src="/assets/svg-icons/shield-check.svg"
                width={15}
                height={15}
              />
            </span>
          )}
          {tyre.onSale && (
            <span className="inline-flex text-xs bg-green-500/75 p-1 pl-2 font-medium text-neutral-950 rounded-l-full gap-1">
              Offers available
              <img
                src="/assets/svg-icons/discount.svg"
                width={17}
                height={17}
              />
            </span>
          )}
        </div>
      </div>
    </li>
  );
};
