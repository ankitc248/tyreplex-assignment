import { useState } from "react";

const Shop = () => {
  const shopName = "SHREE HEMKUNT TYRES AND SERVICES";
  const shopAddress =
    "PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014";
  const cleanedShopAddress = shopAddress.toLowerCase().split(",");
  const days = "Monday - Sunday";
  const timing = "10:00AM - 8:00PM";
  const rating = 4.8;
  const reviews = 2278;

  return (
    <section className="rounded bg-white shadow overflow-hidden">
      <div className="flex justify-between flex-wrap">
        <ShopDetails
          shopName={shopName}
          rating={rating}
          reviews={reviews}
          cleanedShopAddress={cleanedShopAddress}
          days={days}
          timing={timing}
        />
        <div className="flex flex-col">
          <ImageGrid />
        </div>
      </div>
    </section>
  );
};

const ShopDetails = ({
  shopName,
  rating,
  reviews,
  cleanedShopAddress,
  days,
  timing,
}) => (
  <div className="flex flex-col p-5 gap-2">
    <ShopHeader shopName={shopName} rating={rating} reviews={reviews} />
    <MobileImageGrid />
    <AddressAndTimings
      cleanedShopAddress={cleanedShopAddress}
      days={days}
      timing={timing}
    />
    <ActionButtons />
  </div>
);

const ShopHeader = ({ shopName, rating, reviews }) => (
  <>
    <h1 className="text-2xl capitalize">
      {shopName.toLocaleLowerCase()}
      <VerifiedIcon />
    </h1>
    <RatingDisplay rating={rating} reviews={reviews} />
  </>
);

const VerifiedIcon = () => (
  <div className="group relative inline-flex items-center justify-center content-center">
    <img
      src="/assets/icons/verified-check.svg"
      alt="verified"
      width={20}
      height={20}
      className="relative top-0.5 ml-1"
    />
  </div>
);

const RatingDisplay = ({ rating, reviews }) => (
  <div className="flex gap-2 items-center hover:cursor-pointer">
    <span className="inline-flex gap-1 text-white font-semibold bg-green-500 text-xs rounded-sm px-1 py-0.5 shadow-sm">
      {rating}
      <img
        src="/assets/svg-icons/star-blocky.svg"
        alt="star"
        className="invert"
        width={10}
        height={10}
      />
    </span>
    <span className="text-xs font-bold text-neutral-500">
      {reviews} Ratings
    </span>
  </div>
);

const AddressAndTimings = ({ cleanedShopAddress, days, timing }) => (
  <div className="flex gap-6 mt-2 flex-wrap">
    <Address cleanedShopAddress={cleanedShopAddress} />
    <Timings days={days} timing={timing} />
  </div>
);

const Address = ({ cleanedShopAddress }) => (
  <div className="flex gap-2 flex-col">
    <h3 className="text-sm font-medium flex gap-1.5">
      <img
        src="/assets/svg-icons/map-pin.svg"
        alt="address"
        width={15}
        height={15}
        className="contrast-50"
      />
      Address
    </h3>
    {cleanedShopAddress.map((address, index) => (
      <span key={index} className="text-sm text-neutral-500 capitalize">
        {address}
      </span>
    ))}
  </div>
);

const Timings = ({ days, timing }) => (
  <div className="flex gap-2 flex-col">
    <h3 className="text-sm font-medium flex gap-1.5">
      <img
        src="/assets/svg-icons/clock.svg"
        alt="clock"
        width={15}
        height={15}
        className="contrast-50"
      />
      Timings
    </h3>
    <span className="text-sm text-neutral-500">{days}</span>
    <span className="text-sm text-neutral-500">{timing}</span>
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-4 mt-4 lg:mt-auto flex-wrap">
    <ActionButton text="Call now" icon="/assets/svg-icons/phone.svg" />
    <ActionButtonOpposite
      text="Get directions"
      icon="/assets/svg-icons/location-arrow-accent.svg"
    />
  </div>
);

const ActionButton = ({ text, icon }) => (
  <button
    type="button"
    className="group rounded border-accent border-2 bg-white text-accent font-medium p-3 px-4 md:p-2.5 md:px-4 w-full sm:w-64 mb-2 text-sm hover:bg-accent hover:text-white transition-all inline-flex gap-2 justify-between items-center shadow"
  >
    {text}
    <img
      src={icon}
      alt={text.toLowerCase()}
      width={15}
      height={15}
      className="group-hover:brightness-0 group-hover:invert group-hover:scale-125"
    />
  </button>
);
const ActionButtonOpposite = ({ text, icon }) => (
  <button
    type="button"
    className="group rounded border-accent border-2 bg-accent text-white font-medium p-3 px-4 md:p-2.5 md:px-4 w-full sm:w-64 mb-2 text-sm hover:bg-black hover:border-black transition-all inline-flex gap-2 justify-between items-center shadow"
  >
    {text}
    <img
      src={icon}
      alt={text.toLowerCase()}
      width={15}
      height={15}
      className="brightness-0 invert group-hover:scale-125"
    />
  </button>
);

const ImageGrid = () => {
  const shopImages = [
    "/assets/images/2021-04-17.jpg",
    "/assets/images/2020-02-27.jpg",
    "/assets/images/2021-02-06.jpg",
    "/assets/images/2021-02-22.jpg",
  ];
  const [activeImage, setActiveImage] = useState(0);

  const replaceImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <div className="flex-col shadow-left w-full hidden sm:flex lg:w-[510px]">
      <img src={shopImages[activeImage]} alt="shop" />
      <ImageThumbnails
        shopImages={shopImages}
        activeImage={activeImage}
        replaceImage={replaceImage}
      />
    </div>
  );
};

const MobileImageGrid = () => {
  const shopImages = [
    "/assets/images/2021-04-17.jpg",
    "/assets/images/2020-02-27.jpg",
    "/assets/images/2021-02-06.jpg",
    "/assets/images/2021-02-22.jpg",
  ];
  const [activeImage, setActiveImage] = useState(0);

  const replaceImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <div className="flex flex-col shadow-left w-full sm:hidden my-2">
      <img src={shopImages[activeImage]} alt="shop" />
      <ImageThumbnails
        shopImages={shopImages}
        activeImage={activeImage}
        replaceImage={replaceImage}
      />
    </div>
  );
};

const ImageThumbnails = ({ shopImages, activeImage, replaceImage }) => (
  <div className="grid gap-0 grid-cols-3 justify-center">
    {shopImages.slice(1).map((image, index) => (
      <div key={index}>
        <img
          src={image}
          alt="shop"
          className={`hover:brightness-75 hover:cursor-pointer w-full ${
            index + 1 === activeImage ? "brightness-75" : ""
          }`}
          onClick={() => replaceImage(index)}
        />
      </div>
    ))}
  </div>
);

export default Shop;
