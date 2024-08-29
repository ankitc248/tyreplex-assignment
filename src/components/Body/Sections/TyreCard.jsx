const CardTop = ({ tyre }) => (
  <div className="bg-accent/5 relative items-center justify-center flex py-6">
    <img
      loading="lazy"
      src={tyre.image}
      alt="tyre"
      width={100}
      className="mix-blend-multiply"
    />
    <div className="absolute left-0 bottom-0 p-2 bg-white rounded-r-full overflow-hidden shadow-sm">
      <img loading="lazy" src={tyre.logo} width={50} />
    </div>
    <div className="bg-neutral-900/100 w-12 h-1 absolute bottom-4 blur rounded-full"></div>
    <div className="absolute top-0 right-0 flex flex-col items-end gap-1">
      {tyre.warranty > 0 && (
        <span className="inline-flex text-xs bg-yellow-400/75 p-1 pl-3 font-medium text-neutral-950 rounded-l-full gap-1">
          {tyre.warranty} years warranty{" "}
          <img
            loading="lazy"
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
            loading="lazy"
            src="/assets/svg-icons/discount.svg"
            width={17}
            height={17}
          />
        </span>
      )}
    </div>
  </div>
);

const CardBottom = ({ tyre }) => (
  <div className="flex bg-slate-100 flex-col p-2 items-start border-t gap-2">
    <div className="flex flex-col gap-2">
      <div className="text-md font-medium uppercase pl-1">{tyre.name}</div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="text-xs p-1 px-3 text-neutral-900 shadow bg-white rounded w-fit font-medium">
          {tyre.size}
        </div>
        <div className="text-xs p-1 px-3 text-neutral-900 shadow bg-white rounded w-fit font-medium">
          {tyre.tubes}
        </div>
      </div>
    </div>
    <div className="flex gap-2 items-center hover:cursor-pointer">
      <span className="inline-flex gap-1 text-white font-semibold bg-green-600 text-xs rounded-sm px-1 py-0.5 shadow-sm">
        {tyre.rating}
        <img
          loading="lazy"
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
      <div className="text-2xl font-medium text-neutral-800">₹{tyre.price}</div>
    )}
  </div>
);

const TyreCard = ({ tyre }) => (
  <li>
    <a
      href="#"
      className="flex flex-col border border-neutral-300 rounded-md bg-white text-sm relative overflow-hidden justify-between hover:cursor-pointer hover:shadow transition hover:border-accent focus-visible:border-accent"
    >
      <CardTop tyre={tyre} />
      <CardBottom tyre={tyre} />
    </a>
  </li>
);

export default TyreCard;
