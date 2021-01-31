import React from "react";
import Card from "../Card/Card";

import "./CardList.css";

const CardList = ({ monsters }) => {
  const renderMonstersList = () => {
    if (monsters.length > 0) {
      return monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      });
    } else {
      return <h1 className="not-found">Oops! No Monsters Found</h1>;
    }
  };
  return <div className="card-list">{renderMonstersList()}</div>;
};

export default CardList;
