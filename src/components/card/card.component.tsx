import React from "react";
import { Monsters } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monsters;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
