import React, { useEffect, useState } from "react";
import "./App.css";
import _ from "lodash";

function App() {
  const [dogsBreedName, setDogsBreedName] = useState([]);
  const [breedDetails, setBreedDetails] = useState({});
  const [showState, setShowState] = useState(false);

  const fetchBreed = async () => {
    await fetch("/api/dogs")
      .then((res) => res.json())
      .then((data) => setDogsBreedName(data))
      .catch((err) => {
        console.log(err.message);
        console.log("error");
      });
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
    console.log(breedDetails);
  };

  useEffect(() => {
    fetchBreed();
  }, []);

  return (
    <div className="App">
      <h2 className="title">Dogs Breed Names</h2>
      {dogsBreedName.map((dog: any, index) => (
        <button key={index} onClick={() => fetchBreedDetail(dog.name)}>
          {dog.name}
        </button>
      ))}
      {showState ? (
        <>
          <h2 className="title">Dogs Breed Details</h2>
          <p>{JSON.stringify(breedDetails)}</p>{" "}
        </>
      ) : null}
    </div>
  );
}

export default App;
