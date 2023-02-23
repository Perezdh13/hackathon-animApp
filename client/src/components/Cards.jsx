import "../css/cards.css"
import React, { useState, useEffect } from "react";
import pets from "../json/fakeAPI"; // importar la lista de pets desde la fake API


function Cards() {
  return (
    <div className="pets-container">
      {pets.map((pet) => (
        <div className="cardi" key={pet.Id}>
          <div className="face front">
            <img src={Object.values(pet.Image)[0]} alt="file not found" />
            <h3>{pet.Name}</h3>
          </div>
          <div className="face back">
            <h3>{pet.Name}</h3>
            <p>{pet.Description}</p>
            <p>Edad: {pet.Age}</p>
            <p>Altura: {pet.Height}</p>
            <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/replicaWeb" target='_blank'>Adoptame</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
