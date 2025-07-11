import React from "react";
import "../styles/App.css";
import history from "../history";
import Carousel from "./Carousel";

export default function App() {
  return (
    <div className="main screen">
      <Carousel/>
      <div className="carousel-padding header"><span className="polygon">Aurora Quest</span></div>
      <div className="selection">
        {/* <div
          className="select-story"
          onClick={() => {
            history.push("/HeroBooth");
            history.go(0);
          }}
        >
          <h4 className="text-header">Vote for Hero</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/Qme7QyNBX1Q997Fp1bin8JK9KCpk5hyauae35Aosfp2VxV?filename=Angel.png" 
          alt="Angel"  />
        </div> */}
        {/* <div
          className="select-story"
          onClick={() => {
            history.push("/StoryBooth");
            history.go(0);
          }}
        >
          <h4 className="text-header">Vote for Story</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmemTF7ziTVBFFpZzqYvSF3hdK5q6J2bZ85FYUr4mG2CUw?filename=Castle.png" 
          alt="Castel"  />
        </div> */}
        <div
          className="select-story"
          onClick={() => {
            history.push("/App");
            history.go(0);
          }}
        >
          <h4 className="text-header">Go to your Inventory</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmccVpftx3x3W7GxTQGkJjXS6VyJCpgDgHagkAoJCsLnXM?filename=home.png" 
          alt="home"  />
        </div>
      </div>
    </div>
  );
}
