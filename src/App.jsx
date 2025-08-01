import { useState } from "react";
import Header from "./TravelComponents/Header";
import Entry from "./TravelComponents/Entry";
import data from "./data.js";

// import japanImage from "./assets/japan.jpg";

export default function App() {
  // const [count, setCount] = useState(0);

  const entryElems = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        // img={{
        //   src: entry.img.src,
        //   alt: entry.img.alt,
        // }}
        //OR!!!!!!!!!!!!!!!
        img={entry.img}
        title={entry.title}
        urlGoogle={entry.urlGoogle}
        city={entry.city}
        date={entry.date}
        description={entry.description}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">
        {entryElems}
        {/* //before... */}
        {/* <Entry
          img={{
            src: data.src,
            alt: data.alt,
          }}
          title="Japan"
          urlGoogle="https://www.google.com/maps/place/Japan/"
          city="Tokyo"
          date="Dec, 2024"
          description="Japan is an excelent destiny for night life and food.Especially for
          Seafood lovers. YUUUUUM!"
        /> */}
      </main>
    </>
  );
}

// Spread Syntax
{
  /* 
  
<Entry
   key={entry.id}
   {...entry}
/> 

*/
}
