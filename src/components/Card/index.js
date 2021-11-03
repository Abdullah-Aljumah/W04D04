import React from "react";
import { useParams } from "react-router";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Card = () => {
  const [card, setCards] = useState([]);

  const getCards = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    setCards(response.data.data);
  };
  useEffect(() => {
    getCards();
  }, []);

  // second page methods
  let { id } = useParams();

  const cards = card.find((item) => id === String(item.id));
  // ******************************************
  return card.length ? (
    <div className="items">
      <h1> {cards.name} </h1>
      <img src={cards.images.large} alt="logo" style={{ width: "300px" }} />
    </div>
  ) : (
    <h1 className='loading'> Loading ... </h1>
  );
};

export default Card;
