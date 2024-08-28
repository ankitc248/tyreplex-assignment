export default function Companies() {
  const services = [
    "Wheel balancing",
    "Wheel alignment",
    "Tyre replacement",
    "Punctures",
  ];
  return (
    <section className="rounded bg-white shadow overflow-hidden p-4">
      <h3 className="text-xl font-medium">Services offered</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap mt-4 divide-x-2 divide-y-2">
        {services.map((service, index) => (
          <li
            key={index}
            className="text-sm group font-medium text-neutral-600 capitalize hover:font-semibold hover:cursor-pointer hover:bg-slate-100 bg-slate-50"
          >
            <a href="#" className="flex justify-between p-3 whitespace-nowrap">
              {service.toLocaleLowerCase()}
              <img
                src="/assets/svg-icons/chevron-up.svg"
                alt="arrow"
                className="rotate-90 contrast-0 group-hover:animate-swipe-in-arrow opacity-0"
                width={15}
                height={15}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
