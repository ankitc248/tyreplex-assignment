import Shop from "./Sections/Shop";
import Services from "./Sections/Services";
import BreadCrumbs from "./BreadCrumbs";
import Tyres from "./Sections/Tyres";
import Footer from "../Footer/Footer";
import Reviews from "./Sections/Reviews";
export default function Content() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-dvw flex flex-col gap-4 flex-wrap pt-0 sm:pt-4">
        <BreadCrumbs />
        <Shop />
        <Services />
        <Tyres />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}
