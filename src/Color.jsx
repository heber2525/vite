import { useState } from "react";
import Control from "./Control";

function Color() {
  let [r, setR] = useState(0);
  let [g, setG] = useState(0);
  let [b, setB] = useState(0);
  return (
    <section>
      <div className="color" style={{ backgroundColor: `rgb(${[r, g, b].join(",")})` }}></div>
      {[setR, setG, setB].map((funcion, i) => (
        <Control key={i} funcion={funcion} />
      ))}
    </section>
  );
}

export default Color;
