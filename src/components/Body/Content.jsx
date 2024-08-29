import Shop from "./Sections/Shop";
import Services from "./Sections/Services";
import BreadCrumbs from "./BreadCrumbs";
import Tyres from "./Sections/Tyres";
import Footer from "../Footer/Footer";
export default function Content() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="max-w-screen-xl w-dvw flex flex-col gap-4 flex-wrap">
        <BreadCrumbs />
        <Shop />
        <Services />
        <Tyres />
        <Footer />
      </div>
    </div>
  );
}
