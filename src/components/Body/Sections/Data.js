const brandsData = [
  { value: "apollo", label: "Apollo" },
  { value: "bedrock", label: "BEDROCK" },
  { value: "birla", label: "Birla" },
  { value: "bridgestone", label: "Bridgestone" },
  { value: "ceat", label: "CEAT" },
  { value: "continental", label: "Continental" },
  { value: "dunlop", label: "DUNLOP" },
  { value: "falken", label: "Falken" },
  { value: "firestone", label: "Firestone" },
  { value: "goodyear", label: "Goodyear" },
  { value: "hankook", label: "Hankook" },
  { value: "jinyu", label: "JINYU" },
  { value: "jk", label: "JK Tyre" },
  { value: "kelly", label: "Kelly" },
  { value: "kenda", label: "Kenda" },
  { value: "kumho", label: "Kumho" },
  { value: "landsail", label: "LandSail" },
  { value: "linglong", label: "LINGLONG" },
  { value: "maruti", label: "Maruti" },
  { value: "maxxis", label: "Maxxis" },
  { value: "metro", label: "Metro" },
  { value: "metzeler", label: "Metzeler" },
  { value: "michelin", label: "Michelin" },
  { value: "mirage", label: "Mirage" },
  { value: "mrf", label: "MRF" },
  { value: "mrl", label: "MRL" },
  { value: "nexen", label: "Nexen" },
  { value: "pirelli", label: "Pirelli" },
  { value: "ralco", label: "Ralco" },
  { value: "ralson", label: "RALSON" },
  { value: "tvs", label: "TVS Eurogrip" },
  { value: "ultramile", label: "Ultramile" },
  { value: "vk", label: "VK TYRE" },
  { value: "vredestein", label: "Vredestein" },
  { value: "yokohama", label: "Yokohama" },
];

const searchTypesData = [
  { value: "vehicle", label: "Vehicle Type" },
  { value: "brand", label: "Brand" },
  { value: "model", label: "Model" },
  { value: "brake", label: "Brake type" },
  { value: "number", label: "Vehicle Number" },
];

const sortByData = [
  { value: "popular", label: "Most popular" },
  { value: "price-htl", label: "Price: High to Low" },
  { value: "price-lth", label: "Price: Low to High" },
  { value: "rating-lth", label: "Rating: Low to High" },
  { value: "rating-htl", label: "Rating: High to Low" },
];
const tyresData = [
  {
    id: 1,
    brand: "apollo",
    vehicleType: "Car",
    name: "Amazer 4g life",
    image: "/assets/images/img_main.png",
    logo: "/assets/images/apollo-logo.png",
    rating: 4.5,
    reviews: 10,
    price: "3,800",
    quantity: 1,
    warranty: 5,
    onSale: true,
    tubes: "Tubeless",
    size: "215/45R17",
  },
  {
    id: 2,
    brand: "mrf",
    vehicleType: "Car",
    name: "Nylogrip FE Plus",
    image: "/assets/images/mrf_tire.webp",
    logo: "/assets/images/mrf-logo.png",
    rating: 5,
    reviews: 3,
    price: "1,595",
    quantity: 1,
    warranty: 6,
    onSale: false,
    tubes: "Tube tyre",
    size: "90/100-10",
  },
  {
    id: 3,
    brand: "apollo",
    vehicleType: "Car",
    name: "Amazer 4g life",
    image: "/assets/images/img_main.png",
    logo: "/assets/images/apollo-logo.png",
    rating: 4.5,
    reviews: 10,
    price: "3,800",
    quantity: 1,
    warranty: 0,
    onSale: true,
    tubes: "Tubeless",
    size: "215/45R17",
    salePrice: "3,000",
  },
  {
    id: 3,
    brand: "mrf",
    vehicleType: "Car",
    name: "Nylogrip FE Plus",
    image: "/assets/images/mrf_tire.webp",
    logo: "/assets/images/mrf-logo.png",
    rating: 2.5,
    reviews: 30,
    price: "1,595",
    quantity: 1,
    warranty: 0,
    onSale: true,
    tubes: "Tube tyre",
    size: "90/100-10",
    salePrice: "1,000",
  },
];
const reviewsData = [
  {
    rating: 4.5,
    reviewer: "Md Nasir",
    review:
      "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.",
  },
  {
    rating: 5,
    reviewer: "Rohit Bhati",
    review:
      "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    rating: 4,
    reviewer: "Pradeep Kumar",
    review:
      "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
  },
  {
    rating: 4,
    reviewer: "Pradeep Kumar",
    review:
      "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
  },
];
export { brandsData, searchTypesData, sortByData, tyresData, reviewsData };
