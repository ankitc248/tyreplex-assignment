import Shop from "./Sections/Shop";
import Companies from "./Sections/Companies";
import BreadCrumbs from "./BreadCrumbs";
import Tyres from "./Sections/Tyres";
export default function Content() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="max-w-screen-xl w-dvw flex flex-col gap-4 flex-wrap">
        <BreadCrumbs />
        <Shop />
        <Companies />
        <Tyres />
      </div>
    </div>
  );
}
