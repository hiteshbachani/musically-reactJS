import "./styles.css";
import React, { useState } from "react";

var musicDB = {
  workout: [
    { name: "Sultan Title Track", rating: "3/5" },
    { name: "Chak De India", rating: "4/5" }
  ],

  spiritual: [
    { name: "Shiv Kailasho ke Vasi", rating: "3/5" },
    { name: "Matkar Maya Ko Ahankar", rating: "4/5" }
  ],

  romantic: [
    { name: "Dekha Hazaaro dafaa", rating: "3.5/5" },
    { name: "Ranjha", rating: "4/5" }
  ]
};

var music = Object.keys(musicDB);

export default function App() {
  var [selectedCategory, setCategory] = useState("romantic");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>Desi Musically</h1>

      {music.map((category) => (
        <button
          onClick={() => categoryClickHandler(category)}
          style={{
            margin: "1rem 0.5rem",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer"
          }}
        >
          {category}
        </button>
      ))}

      <hr style={{ display: "block" }}></hr>

      <ul style={{ paddingInlineStart: "0" }}>
        {musicDB[selectedCategory].map(function (list) {
          return (
            <li
              key={list.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "75%",
                margin: "auto",
                margin: "1rem",

                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{list.name}</div>
              <div style={{ fontSize: "smaller" }}>{list.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
