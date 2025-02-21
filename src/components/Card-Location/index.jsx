export const CardLocation = ({ element }) => {
  return (
    <div className="card" key={element.id}>
      <h1>{element.name}</h1>
      <p>{element.type}</p>
      <p>{element.dimension}</p>
    </div>
  );
};
