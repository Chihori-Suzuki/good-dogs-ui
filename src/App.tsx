import React, { useEffect, useState } from "react";
// import axios from "axios";

import "./App.css";

function App() {
  const [dogsBreedName, setDogsBreedName] = useState([]);
  const [breedDetails, setBreedDetails] = useState({});
  const [showState, setShowState] = useState(false);

  const fetchBreed = () => {
    fetch(`/api/dogs/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDogsBreedName(data))
      .catch((err) => {
        console.log(err.message);
        console.log("error");
      });
    console.log("dogsBreedName", dogsBreedName);
  };
  const fetchBreedDetail = async (name: string) => {
    setShowState(true);
    await fetch(`/api/dogs/${name}`)
      .then((res) => res.json())
      .then((data) => setBreedDetails(data))
      .catch((err) => {
        console.log(err.message);
        console.log("error");
      });
    console.log("breedDetails", breedDetails);
  };

  useEffect(() => {
    fetchBreed();
  }, []);

  return (
    <div className="App">
      <h2 className="title">Dogs breed names</h2>
      {dogsBreedName.map((dog: any, index) => (
        <button key={index} onClick={() => fetchBreedDetail(dog.name)}>
          {dog.name}
        </button>
      ))}
      {showState ? <p>{breedDetails}</p> : null}
    </div>
  );
}

export default App;
