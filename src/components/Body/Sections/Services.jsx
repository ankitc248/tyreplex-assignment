export default function Services() {
  const services = [
    "Wheel balancing",
    "Wheel alignment",
    "Tyre replacement",
    "Punctures",
  ];
  return (
    <section className="sm:rounded bg-white sm:shadow overflow-hidden p-4">
      <h3 className="text-xl font-medium">Services offered</h3>
      <p className="text-neutral-500 text-xs">
        Wide range of expert services, from maintenance and repairs to custom
        solutions, ensuring top performance and customer satisfaction.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap mt-4 gap-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="text-sm rounded shadow-sm border border-neutral-300 group font-medium text-neutral-700 capitalize hover:font-semibold hover:cursor-pointer hover:bg-slate-100 bg-slate-50"
          >
            <a href="#" className="flex justify-between p-3 whitespace-nowrap font-medium">
              {service.toLocaleLowerCase()}
              <div className="inline-flex gap-1 text-xs items-center opacity-0 group-hover:animate-swipe-in text-neutral-600 font-medium">
                Book now
                <img
                  loading="lazy"
                  src="/assets/svg-icons/chevron-up.svg"
                  alt="arrow"
                  className="rotate-90 contrast-50 group-hover:animate-swipe-in-arrow opacity-0"
                  width={10}
                  height={10}
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
