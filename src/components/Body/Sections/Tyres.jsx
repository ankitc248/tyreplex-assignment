import Select from "react-select";
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
  const tyres = [
    {
      id: 1,
      brand: "apollo",
      vehicleType: "Car",
      name: "Amazer 4g life",
      image: "/assets/images/img_main.jpg",
      rating: 4.5,
      reviews: 10,
      price: 3800,
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
      price: 3800,
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
      price: 3800,
      quantity: 1,
      warranty: 0,
      onSale: true,
      tubes: "Tubeless",
      size: "215/45R17",
    },
  ];
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
      <div className="grid grid-cols-1 gap-4 mt-4 w-full md:grid-cols-2 lg:grid-cols-3">
        {tyres.map((tyre) => (
          <TyreCard key={tyre.id} tyre={tyre} />
        ))}
      </div>
      <button
        type="button"
        className="mt-4 inline-flex bg-white border-2 border-accent p-1 rounded text-accent px-4 text-sm self-center"
      >
        Load more
      </button>
    </section>
  );
}

const TyreCard = ({ tyre }) => {
  return (
    <div className="flex flex-col shadow rounded-md bg-slate-100 p-2 text-sm text-neutral-600 relative h-64 overflow-hidden justify-between">
      <div className="mt-2">
        <img src="/assets/images/apollo-logo.png" width={80} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xl font-medium capitalize">{tyre.name}</div>
        <div className="">{tyre.size}</div>
        <div className="">{tyre.tubes}</div>
      </div>
      <div className="flex gap-2 items-center">
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
      <div className="text-2xl font-semibold text-neutral-800">
        ₹ {tyre.price}
      </div>
      <div className="absolute -bottom-8 -right-8">
        <img
          src="/assets/images/img_main.png"
          alt="heart"
          width={150}
          className="drop-shadow"
        />
      </div>
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
            <img src="/assets/svg-icons/discount.svg" width={17} height={17} />
          </span>
        )}
      </div>
    </div>
  );
};
