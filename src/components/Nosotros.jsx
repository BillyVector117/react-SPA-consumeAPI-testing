import React from "react";
import { Link } from "react-router-dom";
const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    console.log("useEffect");
    getData(); // Mostrar los datos capturados por fetch
  }, []);

  // Using API (fetch)
  const getData = async () => {
    const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
    const users = await data.json(); // Transform datas to JSON format
    setEquipo(users.civilizations);
    // console.log(users.civilizations);
  };
  return (
    <div>
      <h1>Nosotros</h1>
      <p>Requires CORS</p>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              {item.name} - {item.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
