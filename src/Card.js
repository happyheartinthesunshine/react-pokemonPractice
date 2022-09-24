import React, { Component, useEffect, useState } from "react";

const CardCont = ({ cProps, spaceUp }) => {
  console.log("====================================");
  console.log(cProps.jay.abilities);
  console.log("====================================");

  return (
    <div className="cardP">
      <img
        src={cProps.jay.sprites["front_default"]}
        alt={spaceUp(cProps.jay.name)}
        style={{ height: "200", aspectRatio: "1/1" }}
      />
      <div>
        <h2>{spaceUp(cProps.jay.name)}</h2>
        <p>Abilities:</p>
        <ul>
          {cProps.jay.abilities.map((ab, i) => (
            <li key={i}>{spaceUp(ab.ability.name)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Card(props) {
  return props.pokeList.map((data) => {
    return (
      <>
        <CardCont spaceUp={props.spaceUp} cProps={data} key={data.id} />
      </>
    );
  });
}
