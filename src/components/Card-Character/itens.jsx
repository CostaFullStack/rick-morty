export const CardCharacter = ({ element }) => {
  return (
    <div className="card" key={element.id}>
      <img src={element.image} alt={`Foto do personagem ${element.name}`} />
      <h1>{element.name}</h1>
      <p>{element.status}</p>
      <p>{element.species}</p>
      <p>{element.gender}</p>
      <p>{element.location.name}</p>
    </div>
  );
};

