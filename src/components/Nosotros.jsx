import React from "react";
import { Link } from "react-router-dom";
const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);

  // Hook de React
  React.useEffect(() => {
    console.log("seeffect");
    getData(); // Mostrar los datos capturados por fetch
  }, []);

  // Consumiendo una API (fetch)
  const getData = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    ); // fetch a la URL
    const users = await data.json(); // convertir la data a formato JSON
    setEquipo(users.civilizations);
    console.log(users.civilizations);
  };
  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              {item.name} - {item.expansion}
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Nosotros;
