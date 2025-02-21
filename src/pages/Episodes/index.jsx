import axios from "axios";
import { useEffect, useState } from "react";
import { CardEpisodes } from "../../components/Card-Episodes/itens";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState();

  async function FilterEpisodes() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisodes(data.results);
  }

  useEffect(() => {
    FilterEpisodes();
  }, []);

  return (
    <>
      <section className="container">
        {episodes &&
          episodes.map((episode) => <CardEpisodes element={episode} />)}
      </section>
    </>
  );
};
