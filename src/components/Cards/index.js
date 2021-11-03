import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./style.css";

const Cards = () => {
  const history = useHistory();
  const [cards,setCards] = useState([]);

  const getCards = async () => {
    const response =  await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    setCards(response.data.data)
  };
  useEffect(() => {
    getCards();
  }, []);

  const cardPage = (id) => {
    history.push(`/card/${id}`);
  };

  return (
    
    <div>
       <ul className="ulCards">
        {cards.map((item, i) => (
          <div className="cards">
            <li className="card" key={i}>
              <div onClick={() => cardPage(item.id)}>
                <h2>{item.name}</h2>
                 <img src={item.images.large} alt="gg" style={{width:"300px"}} />{" "}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
