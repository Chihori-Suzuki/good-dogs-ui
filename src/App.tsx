import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [dogsBreedName, setDogsBreedName] = useState([]);

  const fetchData = () => {
    console.log("start");

    fetch(
      "https://good-dogs.m90cinjkfob4u.us-west-2.cs.amazonlightsail.com/dogs",
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // "Origin: http": "http://localhost:3000/",
          // "Access-Control-Request-Method": "GET",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        console.log(res);

        return res.json();
      })

      .then((data) => {
        console.log("data", data);
        setDogsBreedName(data);
      })
      .catch((err) => {
        console.log(err.message);
        console.log("error");
      });
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className="App">
      <h2>Hello</h2>
      {dogsBreedName.map((dog, index) => {
        <p key={index}>aaa</p>;
      })}
    </div>
  );
}

export default App;
