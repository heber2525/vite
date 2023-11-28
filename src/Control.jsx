export default function Control({ funcion }) {
  return (
    <input
      type="range"
      min="0"
      max="255"
      defaultValue="0"
      onChange={(evento) => {
        funcion(evento.target.value);
      }}
    ></input>
  );
}
