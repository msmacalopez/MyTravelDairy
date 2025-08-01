import japanImage from "./assets/japan.jpg";
import chileImage from "./assets/chile.jpg";
import australiaImage from "./assets/australia.jpg";

export default [
  //japan
  {
    id: 1,
    img: {
      src: japanImage,
      alt: "Tokyo",
    },
    title: "Japan",
    city: "Tokyo",
    urlGoogle: "https://www.google.com/maps/place/Japan/",
    date: "December, 2024",
    description:
      "Japan is an excelent destiny for night life and food.Especially for Seafood lovers. YUUUUUM!",
  },
  //chile
  {
    id: 2,
    img: {
      src: chileImage,
      alt: "SouthofChile",
    },
    title: "Chile",
    city: "Torres del Paine",
    urlGoogle: "https://www.google.com/maps/place/Chile/",
    date: "March, 2025",
    description:
      "South of Chile is chilly! get ready for best hot seafood and amazing landscapes",
  },
  //australia
  {
    id: 3,
    img: {
      src: australiaImage,
      alt: "Sydney",
    },
    title: "Australia",
    city: "Sydney",
    urlGoogle: "https://www.google.com/maps/place/Australia/",
    date: "May, 2019",
    description: "Wild and gold. Amazing golden coasts and cute wildlife.",
  },
];
