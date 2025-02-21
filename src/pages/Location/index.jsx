import axios from "axios";
import { useEffect, useState } from "react";
import { CardLocation } from "../../components/Card-Location";

export const Location = () => {
  const [locations, setLocation] = useState();

  async function FilterLocation() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setLocation(data.results);
  }

  useEffect(() => {
    FilterLocation();
  }, []);

  return (
    <>
      <section className="container">
        {locations &&
          locations.map((location) => <CardLocation element={location} />)}
      </section>
    </>
  );
};
