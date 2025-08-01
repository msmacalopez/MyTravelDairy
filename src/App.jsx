import { useState } from "react";
import Header from "./TravelComponents/Header";
import Entry from "./TravelComponents/Entry";

import japanImage from "./assets/japan.jpg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img={{
            src: japanImage,
            alt: "Tokyo",
          }}
          title="Japan"
          urlGoogle="https://www.google.com/maps/place/Japan/"
          city="Tokyo"
          date="Dec, 2024"
          description="Japan is an excelent destiny for night life and food.Especially for
          Seafood lovers. YUUUUUM!"
        />
      </main>
    </>
  );
}
