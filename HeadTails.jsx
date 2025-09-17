import React from 'react';
import { useState, useEffect } from 'react';


const HeadTails = ({ setTurn, setStartFlag, theme, setIsPlaying }) => {
    
 const coinFlip = new Audio("assets/coin.mp3");
 const wonCoin = new Audio("assets/coinwon.mp3");
 const lostCoin = new Audio("assets/coinlost.mp3");
 const [startAnimation, setStartAnimation] = useState(false);
 const [heading, setHeading] = useState("Choose wisely!");
 const [resultFlag, setResultFlag] = useState(false);
 const [randomOutcome, setRandomOutcome] = useState("");
 const [themeHead, setThemeHead] = useState("");     // theme-selected, theme-correct, theme-failed
 const [themeTails, setThemeTails] = useState("");   // theme-selected, theme-correct, theme-failed

 const handleHeadOrTails = (selected) => {
    setStartAnimation(true);
    coinFlip.play();
    setTimeout(() => {
      const outcomes = ["head", "tails"];
      const randomIndex = Math.floor(Math.random() * outcomes.length);
      setRandomOutcome(outcomes[randomIndex]);
      setStartAnimation(false);
      setResultFlag(true);
        if (selected === outcomes[randomIndex]) {
            setHeading("Way to go! You start first");
            wonCoin.play();
            if (selected === "head") {
              setThemeHead("theme-correct");
              setThemeTails("");
            } else if (selected === "tails") {
              setThemeTails("theme-correct");
              setThemeHead("");
            }
            setTimeout(() => {
              setTurn(1);
              setIsPlaying(true);
              setStartFlag(true);
            }, 3000);  
        } else {
            setHeading("Too bad! Opponent starts first");
            lostCoin.play();
            if (selected === "head") {
              setThemeHead("theme-failed");
              setThemeTails("");
            } else if (selected === "tails") {
              setThemeTails("theme-failed");
              setThemeHead("");
            }
            setTimeout(() => {
              setTurn(2);
              setIsPlaying(true);
              setStartFlag(true);     
            }, 3000);
        }
    }, 2000);
 };

useEffect(() => {
  setRandomOutcome("");
  setResultFlag(false);
  setHeading("Choose wisely!");
  setThemeHead("");
  setThemeTails("");
}, []);

  return (
    <>
      <div className="popup-overlay">
        <div className={`popup-coin ${theme}`}>
          <h2>Choose head or tails to see who starts first!</h2>
          <div style={{ display: "flex", gap: "40rem", justifyContent: "center", position: "relative", top: "20px" }}>
          <div className={`coin-option ${themeHead}`} onClick={() => { 
            handleHeadOrTails("head")
            setThemeHead("theme-selected");
            }}>
          <img src="assets/head.png" alt="Head" style={{ width: "100px" }} />
          <p>Head</p>
          </div>
          <div className={`coin-option ${themeTails}`} onClick={() => { 
            handleHeadOrTails("tails")
            setThemeTails("theme-selected");}}>
          <img src="assets/tails.png" alt="Tails" style={{ width: "100px" }} />
          <p>Tails</p>
          </div>
          </div>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
          {resultFlag && !startAnimation && <img src={`assets/${randomOutcome}.png`} alt={randomOutcome} style={{ width: "100px"}} />}
          {!startAnimation && !resultFlag && <h3 style={{ position: "relative", top: "80px" }}>{heading}</h3>}
          {!startAnimation && resultFlag && <h3 style={{ position: "relative", top: "40px" }}>{heading}</h3>}
          {startAnimation && <img src={`assets/flip.gif`} alt="coin flip" style={{ width: "300px" }} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadTails;