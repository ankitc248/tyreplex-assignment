import { useState } from "react";
export default function Shop() {
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
        <div className="flex flex-col p-5 gap-2">
          <h1 className="text-2xl capitalize flex gap-1">
            {shopName.toLocaleLowerCase()}
            <div className="group relative flex items-center justify-center content-center">
              <img
                src="/assets/icons/verified-check.svg"
                alt="verified"
                width={24}
                height={24}
              />
              <p className="text-xs text-accent font-medium rounded p-1 absolute left-6 opacity-0 group-hover:animate-swipe-in pointer-events-none">
                Verified
              </p>
            </div>
          </h1>
          <div className="flex gap-2 items-center hover:cursor-pointer">
            <span className="inline-flex gap-1 text-white font-semibold bg-green-500 text-xs rounded-sm px-1 py-0.5 shadow-sm">
              {rating}
              <img
                src="/assets/svg-icons/star-blocky.svg"
                alt="star"
                className="invert"
                width={10}
                height={10}
              ></img>
            </span>
            <span className="text-xs font-bold text-neutral-500">
              {reviews} Ratings
            </span>
          </div>
          <div className="flex gap-6 mt-2 flex-wrap">
            <div className="flex gap-2 flex-col">
              <h3 className="text-sm font-medium flex gap-1.5">
                <img
                  src="/assets/svg-icons/map-pin.svg"
                  alt="address"
                  width={15}
                  height={15}
                  className="contrast-50"
                ></img>
                Address
              </h3>
              {cleanedShopAddress.map((address, index) => (
                <span
                  key={index}
                  className="text-sm text-neutral-500 capitalize"
                >
                  {address}
                </span>
              ))}
            </div>
            <div className="flex gap-2 flex-col">
              <h3 className="text-sm font-medium flex gap-1.5">
                <img
                  src="/assets/svg-icons/clock.svg"
                  alt="clock"
                  width={15}
                  height={15}
                  className="contrast-50"
                ></img>
                Timings
              </h3>
              <span className="text-sm text-neutral-500">{days}</span>
              <span className="text-sm text-neutral-500">{timing}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-auto flex-wrap">
            <button
              type="button"
              className="group rounded border-accent border-2 bg-white text-accent font-medium py-2 w-56 mb-2 text-sm hover:bg-accent hover:text-white transition-all inline-flex gap-2 justify-center items-center shadow"
            >
              <img
                src="/assets/svg-icons/phone.svg"
                alt="phone"
                width={15}
                height={15}
                className="group-hover:brightness-0 group-hover:invert"
              />
              Call now
            </button>
            <button
              type="button"
              className="group rounded border-accent border-2 bg-white text-accent font-medium py-2 w-56 mb-2 text-sm hover:bg-accent hover:text-white inline-flex gap-2 justify-center items-center transition-all shadow"
            >
              Get directions
              <img
                src="/assets/svg-icons/location-arrow-accent.svg"
                alt="location"
                width={15}
                height={15}
                className="group-hover:brightness-0 group-hover:invert group-hover:scale-105"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <ImageGrid />
        </div>
      </div>
    </section>
  );
}

function ImageGrid() {
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
    <div className="flex flex-col shadow-left w-88">
      <img src={shopImages[activeImage]} alt="shop" width={510} height={300} />
      <div className="grid gap-0 grid-cols-3 justify-center">
        {shopImages.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="shop"
            width={170}
            height={170}
            className={`hover:brightness-75 hover:cursor-pointer ${
              index + 1 === activeImage ? "brightness-75" : ""
            }`}
            onClick={() => replaceImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
