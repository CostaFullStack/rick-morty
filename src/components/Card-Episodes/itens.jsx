export const CardEpisodes = ({ element }) => {
  return (
    <div className="card" key={element.id}>
      <h1>{element.name}</h1>
      <p>{element.air_date}</p>
      <p>{element.episode}</p>
    </div>
  );
};
