import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SelectComponent } from "../../components/Select";
import { especiesOp, generosOp, statusOp } from "../../utils/opcoes";
import { CardCharacter } from "../../components/Card-Character/itens";

export const Characters = () => {
  const [characters, setCharacters] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");

  async function SearchOrFilter(url) {
    setCharacters(null);
    const { data } = await axios.get(url);
    setCharacters(data.results);
  }

  useEffect(() => {
    name || status || gender || specie
      ? SearchOrFilter(
          `https://rickandmortyapi.com/api/character?name=${name}&species=${specie}&gender=${gender}&status=${status}`
        )
      : SearchOrFilter("https://rickandmortyapi.com/api/character");
  }, [name, status, gender, specie]);
  return (
    <>
      <div id="input-div">
        <input
          type="text"
          name="pesquisar"
          id="pesquisar"
          placeholder="Digite o nome do personagem"
          onChange={(element) => setName(element.target.value)}
        />
      </div>
      <div id="div-select">
        <SelectComponent
          opcoes={generosOp}
          onChange={(element) => setGender(element.target.value)}
        />

        <SelectComponent
          opcoes={especiesOp}
          onChange={(element) => setSpecie(element.target.value)}
        />

        <SelectComponent
          opcoes={statusOp}
          onChange={(element) => setStatus(element.target.value)}
        />
      </div>

      <section className="container">
        {characters &&
          characters.map((character) => <CardCharacter element={character} />)}
      </section>
    </>
  );
};
