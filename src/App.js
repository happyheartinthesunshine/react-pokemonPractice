import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [number, setNumber] = useState(null);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const api = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon",
    });

    async function fetchApi(num) {
      const res = await api.get("/" + num);
      const data = await res.data;
      return data;
    }
    async function addPokemon(jay) {
      const id = jay.id;
      await setPokeList((pokeList) => {
        return pokeList.concat({ id, jay });
      });
    }
    fetchApi(Math.round(Math.random() * 400)).then((res) => addPokemon(res));
  }, [number]);
  const spaceUp = (str) => {
    var string = str.split("-");
    if (string.length === 1) return str;
    return string[0] + " " + string[1];
  };

  return (
    <div className="cont">
      <button
        onClick={() => {
          setNumber(Math.round(Math.random() * 400));
        }}
      >
        ⟳
      </button>
      <div className="cardsContainer">
        <Card spaceUp={spaceUp} pokeList={pokeList} />
      </div>
    </div>
  );
}
export default App;
