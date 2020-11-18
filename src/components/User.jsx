import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  // console.log(useParams()); Muestra por consola el params de la url (:id)

  const { id } = useParams(); // Destructurando el id del params
  console.log(id); // mostrar ese id

  const [civilizacion, setCivilizacion] = React.useState([]);

  // Hook de React
  React.useEffect(() => {
    // Consumiendo una API (fetch) en especifica (la que el user clickee)
    const getData = async () => {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      );
      const users = await data.json(); // convertir la data a formato JSON
      setCivilizacion(users);
    };
    getData(); // Mostrar los datos capturados por fetch
  }, [id]);

  return (
    <div>
      <h3>{civilizacion.name}</h3>
      <p>{civilizacion.team_bonus}</p>
    </div>
  );
};

export default User;
