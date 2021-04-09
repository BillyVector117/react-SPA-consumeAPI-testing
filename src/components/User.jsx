import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  // console.log(useParams()); Contais Url-Params (:id)

  const { id } = useParams(); // Store id
  const [civilizacion, setCivilizacion] = React.useState([]);

  React.useEffect(() => {
    // Consume specific data from API using :id, with (fetch) 
    const getData = async () => {
      const data = await fetch(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      );
      const users = await data.json();
      setCivilizacion(users);
    };
    getData();
  }, [id]);

  return (
    <div>
      <h3>{civilizacion.name}</h3>
      <p>{civilizacion.team_bonus}</p>
    </div>
  );
};

export default User;
