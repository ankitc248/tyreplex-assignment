export default function BreadCrumbs() {
  const breadCrumbs = [
    "Home",
    "Tyre Dealers",
    "Tyre Dealers Ghaziabad",
    "SHREE HEMKUNT TYRES AND SERVICES",
  ];
  const activeBreadCrumb = breadCrumbs[breadCrumbs.length - 1];
  return (
    <div className="flex items-center gap-2 overflow-hidden text-ellipsis px-2">
      {breadCrumbs.map((breadCrumb, index) => (
        <span
          key={index}
          className={`text-sm font-medium text-neutral-500 capitalize hover:font-semibold hover:cursor-pointer whitespace-nowrap ${
            activeBreadCrumb === breadCrumb ? "font-semibold" : ""
          }`}
        >
          {breadCrumb.toLocaleLowerCase()}
          {index !== breadCrumbs.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  );
}
