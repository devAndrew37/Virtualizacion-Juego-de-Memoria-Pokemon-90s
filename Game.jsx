import React, { use } from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./Game.css";
import Pokemon from "./Pokemon.jsx";
import HeadTails from "./HeadTails.jsx";

export const cardDeck = [
  {
    src: "/assets/Arbo.png",
    figure: 1,
    name: "ekans",
    pair: 1,
    id: 23,
    url: "https://pokedex.mimo.dev/api/pokemon/23/"
  },
  {
    src: "/assets/Arbo.png",
    figure: 1,
    name: "ekans",
    pair: 2,
    id: 23,
    url: "https://pokedex.mimo.dev/api/pokemon/23/"
  },
  {
    src: "/assets/Aria.png",
    figure: 2,
    name: "clefairy",
    pair: 1,
    id: 35,
    url: "https://pokedex.mimo.dev/api/pokemon/35/"
  },
  {
    src: "/assets/Aria.png",
    figure: 2,
    name: "clefairy",
    pair: 2,
    id: 35,
    url: "https://pokedex.mimo.dev/api/pokemon/35/"
  },
  {
    src: "/assets/Ariala.png",
    figure: 3,
    name: "clefable",
    pair: 1,
    id: 36,
    url: "https://pokedex.mimo.dev/api/pokemon/36/"
  },
  {
    src: "/assets/Ariala.png",
    figure: 3,
    name: "clefable",
    pair: 2,
    id: 36,
    url: "https://pokedex.mimo.dev/api/pokemon/36/"
  },
  {
    src: "/assets/Blastoise.png",
    figure: 4,
    name: "blastoise",
    pair: 1,
    id: 9,
    url: "https://pokedex.mimo.dev/api/pokemon/9/"
  },
  {
    src: "/assets/Blastoise.png",
    figure: 4,
    name: "blastoise",
    pair: 2,
    id: 9,
    url: "https://pokedex.mimo.dev/api/pokemon/9/"
  },
  {
    src: "/assets/Bulbasaur.png",
    figure: 5,
    name: "bulbasaur",
    pair: 1,
    id: 1,
    url: "https://pokedex.mimo.dev/api/pokemon/1/"
  },
  {
    src: "/assets/Bulbasaur.png",
    figure: 5,
    name: "bulbasaur",
    pair: 2,
    id: 1,
    url: "https://pokedex.mimo.dev/api/pokemon/1/"
  },
  {
    src: "/assets/Butterfree.png",
    figure: 6,
    name: "butterfree",
    pair: 1,
    id: 12,
    url: "https://pokedex.mimo.dev/api/pokemon/12/"
  },
  {
    src: "/assets/Butterfree.png",
    figure: 6,
    name: "butterfree",
    pair: 2,
    id: 12,
    url: "https://pokedex.mimo.dev/api/pokemon/12/"
  },
  {
    src: "/assets/Caterpie.png",
    figure: 7,
    name: "caterpie",
    pair: 1,
    id: 10,
    url: "https://pokedex.mimo.dev/api/pokemon/10/"
  },
  {
    src: "/assets/Caterpie.png",
    figure: 7,
    name: "caterpie",
    pair: 2,
    id: 10,
    url: "https://pokedex.mimo.dev/api/pokemon/10/"
  },
  {
    src: "/assets/Charmander.png",
    figure: 8,
    name: "charmander",
    pair: 1,
    id: 4,
    url: "https://pokedex.mimo.dev/api/pokemon/4/"
  },
  {
    src: "/assets/Charmander.png",
    figure: 8,
    name: "charmander",
    pair: 2,
    id: 4,
    url: "https://pokedex.mimo.dev/api/pokemon/4/"
  },
  {
    src: "/assets/Dragonite.png",
    figure: 9,
    name: "dragonite",
    pair: 1,
    id: 149,
    url: "https://pokedex.mimo.dev/api/pokemon/149/"
  },
  {
    src: "/assets/Dragonite.png",
    figure: 9,
    name: "dragonite",
    pair: 2,
    id: 149,
    url: "https://pokedex.mimo.dev/api/pokemon/149/"
  },
  {
    src: "/assets/Flareon.png",
    figure: 10,
    name: "flareon",
    pair: 1,
    id: 136,
    url: "https://pokedex.mimo.dev/api/pokemon/136/"
  },
  {
    src: "/assets/Flareon.png",
    figure: 10,
    name: "flareon",
    pair: 2,
    id: 136,
    url: "https://pokedex.mimo.dev/api/pokemon/136/"
  },
  {
    src: "/assets/Geodude.png",
    figure: 11,
    name: "geodude",
    pair: 1,
    id: 74,
    url: "https://pokedex.mimo.dev/api/pokemon/74/"
  },
  {
    src: "/assets/Geodude.png",
    figure: 11,
    name: "geodude",
    pair: 2,
    id: 74,
    url: "https://pokedex.mimo.dev/api/pokemon/74/"
  },
  {
    src: "/assets/Grimer.png",
    figure: 12,
    name: "grimer",
    pair: 1,
    id: 88,
    url: "https://pokedex.mimo.dev/api/pokemon/88/"
  },
  {
    src: "/assets/Grimer.png",
    figure: 12,
    name: "grimer",
    pair: 2,
    id: 88,
    url: "https://pokedex.mimo.dev/api/pokemon/88/"
  },
  {
    src: "/assets/Haunter.png",
    figure: 13,
    name: "haunter",
    pair: 1,
    id: 93,
    url: "https://pokedex.mimo.dev/api/pokemon/93/"
  },
  {
    src: "/assets/Haunter.png",
    figure: 13,
    name: "haunter",
    pair: 2,
    id: 93,
    url: "https://pokedex.mimo.dev/api/pokemon/93/"
  },
  {
    src: "/assets/Ivysaur.png",
    figure: 14,
    name: "ivysaur",
    pair: 1,
    id: 2,
    url: "https://pokedex.mimo.dev/api/pokemon/2/"
  },
  {
    src: "/assets/Ivysaur.png",
    figure: 14,
    name: "ivysaur",
    pair: 2,
    id: 2,
    url: "https://pokedex.mimo.dev/api/pokemon/2/"
  },
  {
    src: "/assets/Jigglypuff.png",
    figure: 15,
    name: "jigglypuff",
    pair: 1,
    id: 39,
    url: "https://pokedex.mimo.dev/api/pokemon/39/"
  },
  {
    src: "/assets/Jigglypuff.png",
    figure: 15,
    name: "jigglypuff",
    pair: 2,
    id: 39,
    url: "https://pokedex.mimo.dev/api/pokemon/39/"
  },
  {
    src: "/assets/Kang.png",
    figure: 16,
    name: "kangaskhan",
    pair: 1,
    id: 115,
    url: "https://pokedex.mimo.dev/api/pokemon/115/"
  },
  {
    src: "/assets/Kang.png",
    figure: 16,
    name: "kangaskhan",
    pair: 2,
    id: 115,
    url: "https://pokedex.mimo.dev/api/pokemon/115/"
  },
  {
    src: "/assets/Karate.png",
    figure: 17,
    name: "machop",
    pair: 1,
    id: 66,
    url: "https://pokedex.mimo.dev/api/pokemon/66/"
  },
  {
    src: "/assets/Karate.png",
    figure: 17,
    name: "machop",
    pair: 2,
    id: 66,
    url: "https://pokedex.mimo.dev/api/pokemon/66/"
  },
  {
    src: "/assets/Meowth.png",
    figure: 18,
    name: "meowth",
    pair: 1,
    id: 52,
    url: "https://pokedex.mimo.dev/api/pokemon/52/"
  },
  {
    src: "/assets/Meowth.png",
    figure: 18,
    name: "meowth",
    pair: 2,
    id: 52,
    url: "https://pokedex.mimo.dev/api/pokemon/52/"
  },
  {
    src: "/assets/Neptune.png",
    figure: 19,
    name: "seaking",
    pair: 1,
    id: 119,
    url: "https://pokedex.mimo.dev/api/pokemon/119/"
  },
  {
    src: "/assets/Neptune.png",
    figure: 19,
    name: "seaking",
    pair: 2,
    id: 119,
    url: "https://pokedex.mimo.dev/api/pokemon/119/"
  },
  {
    src: "/assets/Nidoran.png",
    figure: 20,
    name: "nidoran♂",
    pair: 1,
    id: 32,
    url: "https://pokedex.mimo.dev/api/pokemon/32/"
  },
  {
    src: "/assets/Nidoran.png",
    figure: 20,
    name: "nidoran♂",
    pair: 2,
    id: 32,
    url: "https://pokedex.mimo.dev/api/pokemon/32/"
  },
  {
    src: "/assets/Nidorina.png",
    figure: 21,
    name: "nidorina",
    pair: 1,
    id: 30,
    url: "https://pokedex.mimo.dev/api/pokemon/30/"
  },
  {
    src: "/assets/Nidorina.png",
    figure: 21,
    name: "nidorina",
    pair: 2,
    id: 30,
    url: "https://pokedex.mimo.dev/api/pokemon/30/"
  },
  {
    src: "/assets/Orphon.png",
    figure: 22,
    name: "cubone",
    pair: 1,
    id: 104,
    url: "https://pokedex.mimo.dev/api/pokemon/104/"
  },
  {
    src: "/assets/Orphon.png",
    figure: 22,
    name: "cubone",
    pair: 2,
    id: 104,
    url: "https://pokedex.mimo.dev/api/pokemon/104/"
  },
  {
    src: "/assets/Persian.png",
    figure: 23,
    name: "persian",
    pair: 1,
    id: 53,
    url: "https://pokedex.mimo.dev/api/pokemon/53/"
  },
  {
    src: "/assets/Persian.png",
    figure: 23,
    name: "persian",
    pair: 2,
    id: 53,
    url: "https://pokedex.mimo.dev/api/pokemon/53/"
  },
  {
    src: "/assets/Pidgotto.png",
    figure: 24,
    name: "pidgeotto",
    pair: 1,
    id: 17,
    url: "https://pokedex.mimo.dev/api/pokemon/17/"
  },
  {
    src: "/assets/Pidgotto.png",
    figure: 24,
    name: "pidgeotto",
    pair: 2,
    id: 17,
    url: "https://pokedex.mimo.dev/api/pokemon/17/"
  },
  {
    src: "/assets/Pikachu.png",
    figure: 25,
    name: "pikachu",
    pair: 1,
    id: 25,
    url: "https://pokedex.mimo.dev/api/pokemon/25/"
  },
  {
    src: "/assets/Pikachu.png",
    figure: 25,
    name: "pikachu",
    pair: 2,
    id: 25,
    url: "https://pokedex.mimo.dev/api/pokemon/25/"
  },
  {
    src: "/assets/Psyduck.png",
    figure: 26,
    name: "psyduck",
    pair: 1,
    id: 54,
    url: "https://pokedex.mimo.dev/api/pokemon/54/"
  },
  {
    src: "/assets/Psyduck.png",
    figure: 26,
    name: "psyduck",
    pair: 2,
    id: 54,
    url: "https://pokedex.mimo.dev/api/pokemon/54/"
  },
  {
    src: "/assets/Raichu.png",
    figure: 27,
    name: "raichu",
    pair: 1,
    id: 26,
    url: "https://pokedex.mimo.dev/api/pokemon/26/"
  },
  {
    src: "/assets/Raichu.png",
    figure: 27,
    name: "raichu",
    pair: 2,
    id: 26,
    url: "https://pokedex.mimo.dev/api/pokemon/26/"
  },
  {
    src: "/assets/Raticate.png",
    figure: 28,
    name: "raticate",
    pair: 1,
    id: 20,
    url: "https://pokedex.mimo.dev/api/pokemon/20/"
  },
  {
    src: "/assets/Raticate.png",
    figure: 28,
    name: "raticate",
    pair: 2,
    id: 20,
    url: "https://pokedex.mimo.dev/api/pokemon/20/"
  },
  {
    src: "/assets/Rattata.png",
    figure: 29,
    name: "rattata",
    pair: 1,
    id: 19,
    url: "https://pokedex.mimo.dev/api/pokemon/19/"
  },
  {
    src: "/assets/Rattata.png",
    figure: 29,
    name: "rattata",
    pair: 2,
    id: 19,
    url: "https://pokedex.mimo.dev/api/pokemon/19/"
  },
  {
    src: "/assets/Sandshrew.png",
    figure: 30,
    name: "sandshrew",
    pair: 1,
    id: 27,
    url: "https://pokedex.mimo.dev/api/pokemon/27/"
  },
  {
    src: "/assets/Sandshrew.png",
    figure: 30,
    name: "sandshrew",
    pair: 2,
    id: 27,
    url: "https://pokedex.mimo.dev/api/pokemon/27/"
  },
  {
    src: "/assets/Slowbro.png",
    figure: 31,
    name: "slowbro",
    pair: 1,
    id: 80,
    url: "https://pokedex.mimo.dev/api/pokemon/80/"
  },
  {
    src: "/assets/Slowbro.png",
    figure: 31,
    name: "slowbro",
    pair: 2,
    id: 80,
    url: "https://pokedex.mimo.dev/api/pokemon/80/"
  },
  {
    src: "/assets/Slowmo.png",
    figure: 32,
    name: "slowpoke",
    pair: 1,
    id: 79,
    url: "https://pokedex.mimo.dev/api/pokemon/79/"
  },
  {
    src: "/assets/Slowmo.png",
    figure: 32,
    name: "slowpoke",
    pair: 2,
    id: 79,
    url: "https://pokedex.mimo.dev/api/pokemon/79/"
  },
  {
    src: "/assets/Squirtle.png",
    figure: 33,
    name: "squirtle",
    pair: 1,
    id: 7,
    url: "https://pokedex.mimo.dev/api/pokemon/7/"
  },
  {
    src: "/assets/Squirtle.png",
    figure: 33,
    name: "squirtle",
    pair: 2,
    id: 7,
    url: "https://pokedex.mimo.dev/api/pokemon/7/"
  },
  {
    src: "/assets/Staryu.png",
    figure: 34,
    name: "staryu",
    pair: 1,
    id: 120,
    url: "https://pokedex.mimo.dev/api/pokemon/120/"
  },
  {
    src: "/assets/Staryu.png",
    figure: 34,
    name: "staryu",
    pair: 2,
    id: 120,
    url: "https://pokedex.mimo.dev/api/pokemon/120/"
  },
  {
    src: "/assets/Voltorb.png",
    figure: 35,
    name: "voltorb",
    pair: 1,
    id: 100,
    url: "https://pokedex.mimo.dev/api/pokemon/100/"
  },
  {
    src: "/assets/Voltorb.png",
    figure: 35,
    name: "voltorb",
    pair: 2,
    id: 100,
    url: "https://pokedex.mimo.dev/api/pokemon/100/"
  },
  {
    src: "/assets/Wigglytuff.png",
    figure: 36,
    name: "wigglytuff",
    pair: 1,
    id: 40,
    url: "https://pokedex.mimo.dev/api/pokemon/40/"
  },
  {
    src: "/assets/Wigglytuff.png",
    figure: 36,
    name: "wigglytuff",
    pair: 2,
    id: 40,
    url: "https://pokedex.mimo.dev/api/pokemon/40/"
  }
 ];

const Game = ({ setIsPlaying, theme }) => {
 const navigate = useNavigate();
 const location = useLocation();
 const mode = location.state?.mode || "cpu"; 
 const difficulty = location.state?.difficulty || 6;
 const match = new Audio("/assets/match.mp3");
 const youWin = new Audio("/assets/youwin.mp3");
 const youLose = new Audio("/assets/youlose.mp3");
 const mainMenu = new Audio("/assets/main_menu.mp3");
 const tie = new Audio("/assets/tie.mp3");
 


  const player1Mode = mode == "cpu" ? "Player" : "Player 1";
  const player2Mode = mode == "cpu" ? "CPU" : "Player 2";
  const [startFlag, setStartFlag] = useState(false); // Para mostrar cara o sello al inicio
  const [cards, setCards] = useState(cardDeck);
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [found1, setFound1] = useState([]); // Cartas del jugador 1
  const [found2, setFound2] = useState([]); // Cartas del jugador 2
  const [turn, setTurn] = useState(1); // 1 o 2
  const [removed, setRemoved] = useState(Array(cards.length).fill(false)); // Para quitar del tablero
  const [cpuMemoryCards, setCpuMemoryCards] = useState([]); // Para que el CPU recuerde
  const cpuMemoryLimit = difficulty; // Número de cartas que el CPU puede recordar
  const [pokemonData, setPokemonData] = useState(null);
  const [noPickFlag, setNoPickFlag] = useState(false); // Para evitar clicks rápidos
  const [correctCpuFlag, setCorrectCpuFlag] = useState(false);
  const [pokemonDataFlag, setPokemonDataFlag] = useState(false);
  const [pickedIndex, setPickedIndex] = useState(0);
  const [pokemonAnimation, setPokemonAnimation] = useState("/assets/pikapika.gif");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const remainingCards = removed.filter(r => !r).length;

  const randomAnimation = () => {
    const animations = ["/assets/charmander.gif", "/assets/pikapika.gif", "/assets/squirtle.gif", "/assets/squirtle2.gif", "/assets/bulbasaur.gif"];
    setPokemonAnimation(animations[Math.floor(Math.random() * animations.length)]);
  };
  const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const pickCard = (index) => {
  if (flipped[index] || removed[index] || noPickFlag || (turn === 2 && mode === "cpu")) return; // No permitir click
    setFlipped(prev => prev.map((f, i) => i === index ? true : f));
    if (firstCard === null) {
      setFirstCard(index);
      rememberCard(index, cards[index]);
    } else if (secondCard === null && index !== firstCard) {
      setSecondCard(index);
      rememberCard(index, cards[index]);
      setNoPickFlag(true); // Activar bandera para evitar clicks rapidos
      if (cards[firstCard].figure === cards[index].figure) {
        // Match!
        match.play();
        setTimeout(() => showPokemonCard(index), 700);
        setTimeout(() => {
          if (turn === 1) {
            setFound1(prev => [...prev, [cards[firstCard], cards[index]]]);
          } else {
            setFound2(prev => [...prev, [cards[firstCard], cards[index]]]);
          }
          // Quitar del tablero
          setRemoved(prev => prev.map((r, i) => (i === firstCard || i === index) ? true : r));
          setCpuMemoryCards(prev => prev.filter(item => item.index !== firstCard && item.index !== index));
          setFirstCard(null);
          setSecondCard(null);
          randomAnimation();
          setNoPickFlag(false);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setFlipped(prev => prev.map((f, i) => (i === firstCard || i === index) ? false : f));
          setFirstCard(null);
          setSecondCard(null);
          randomAnimation();
          setTurn(t => t === 1 ? 2 : 1); // Cambia de turno
          setNoPickFlag(false);
        }, 1000);
      }
    }
  };

const findKnownPair = (memory, removed) => {
  const seen = {};
  for (const { index, card } of memory) {
    if (removed[index]) continue;
    if (!seen[card.figure]) {
      seen[card.figure] = index;
    } else {
      return [seen[card.figure], index];
    }
  }
  return null;
};

function rememberCard(index, card) {
  if (removed[index]) return; // No recordar cartas ya ganadas
  setCpuMemoryCards(prev => {
    if (prev.some(item => item.index === index)) return prev;
    const newMemory = [...prev, { index, card }];
    if (newMemory.length > cpuMemoryLimit) newMemory.shift();
    return newMemory;
  });
}

const cpuTurn = () => {
  if (mode === 'player2' || turn === 1) return;
  const availableIndexes = cards
    .map((_, i) => (!flipped[i] && !removed[i] ? i : null))
    .filter(i => i !== null);

  if (availableIndexes.length < 2) return;

  // 1. Busca un par conocido en la memoria
  const knownPair = findKnownPair(cpuMemoryCards || {}, removed);

  let firstIdx, secondIdx;
  if (knownPair) {
    [firstIdx, secondIdx] = knownPair;
  } else {
    // Si no hay par conocido, elige dos al azar
    [firstIdx, secondIdx] = shuffleCards([...availableIndexes]).slice(0, 2);
  }

  // Voltea la primera carta
  setTimeout(() => {
  setFlipped(prev => prev.map((f, i) => i === firstIdx ? true : f));
  setFirstCard(firstIdx);
  rememberCard(firstIdx, cards[firstIdx]);
  setTimeout(() => {
    // Voltea la segunda carta
    setFlipped(prev => prev.map((f, i) => i === secondIdx ? true : f));
    setSecondCard(secondIdx);
    rememberCard(secondIdx, cards[secondIdx]);
    setNoPickFlag(true);
    setTimeout(() => {
      if (cards[firstIdx].figure === cards[secondIdx].figure) {
        // Match!
        match.play();
        setTimeout(() => {
          playPokeSound(cards[secondIdx].id);
        }, 700);
        setTimeout(() => {
          setFound2(prev => [...prev, [cards[firstIdx], cards[secondIdx]]]);
          setRemoved(prev => prev.map((r, i) => (i === firstIdx || i === secondIdx) ? true : r));
          setCpuMemoryCards(prev => prev.filter(item => item.index !== firstIdx && item.index !== secondIdx));
          setFirstCard(null);
          setSecondCard(null);
          randomAnimation();
          setNoPickFlag(false);
          setCorrectCpuFlag(prev => !prev);
        }, 1000);
      } else {
        setFlipped(prev => prev.map((f, i) => (i === firstIdx || i === secondIdx) ? false : f));
        setFirstCard(null);
        setSecondCard(null);
        randomAnimation();
        setTurn(1); // Cambia al jugador
        setNoPickFlag(false);
      }
    }, 1500); // Espera antes de resolver el match
  }, 1000); // Espera antes de voltear la segunda carta
  }, 1000); // Espera antes de voltear la primera carta
};

const showPokemonCard = (e) => {
  setPokemonDataFlag(true);
  setPickedIndex(e);
};

const playPokeSound = async (id) => {
  const query = await fetch(`https://corsproxy.io/?${encodeURIComponent("https://pokedex.mimo.dev/api/pokemon/" + id)}`);
  const data = await query.json();
  const cryUrlLegacy = data.cries.legacy;
  const cryUrlLatest = data.cries.latest;
  // Elige random: 0 para legacy, 1 para latest
  const pick = Math.random() < 0.5 ? "legacy" : "latest";
  let soundUrl = pick === "latest" ? cryUrlLatest : cryUrlLegacy;

  // Si eligió latest pero no existe, usa legacy
  if (pick === "latest" && !cryUrlLatest && cryUrlLegacy) {
    soundUrl = cryUrlLegacy;
  }
  // Si eligió legacy pero no existe, usa latest
  if (pick === "legacy" && !cryUrlLegacy && cryUrlLatest) {
    soundUrl = cryUrlLatest;
  }

  if (!soundUrl) return; // Si no hay ninguno, no hace nada
  const sound = new Audio(soundUrl);

  sound.play();
};

const checkWinner = () => {
  if (found1.length > found2.length){
    setPopupMessage(`${player1Mode} wins!`);
    setShowPopup(true);
    youWin.play();
  } else if (found1.length < found2.length) {
    setPopupMessage(`${player2Mode} wins!`);
    setShowPopup(true);
    youLose.play();
  } else {
    setPopupMessage("It's a tie!");
    setShowPopup(true);
    tie.play();
  }
}

useEffect(() => {
  const shuffled = shuffleCards(cards);
    setCards(shuffled);
}, []);

useEffect(() => {
  if (turn === 2 && mode !== "player2") {
    cpuTurn();
  }
}, [turn, correctCpuFlag]);

useEffect(() => {
  if (remainingCards === 0){
    if (pokemonDataFlag) {
    setTimeout(() => {
      setIsPlaying(false);
      checkWinner();
    }, 4000);
  } else {
    setIsPlaying(false);
    checkWinner();
  }
  }
}, [remainingCards]);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return; // Evita conflicto con inputs
    if (e.key === "Escape") {
      setShowPopup(false);
      setPokemonDataFlag(false);
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

return (
  <>
    {!startFlag && <HeadTails setTurn={setTurn} setStartFlag={setStartFlag} theme={theme} setIsPlaying={setIsPlaying} /> }
    {showPopup && (
      <div className="popup-overlay">
        <div className={`popup ${theme}`}>
          <h2>{popupMessage}</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => {
            mainMenu.play();
            setTimeout(() => {
              navigate('/');
            }, 2600);
          }}>Main Menu</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      </div>
      )}
      {pokemonDataFlag && <Pokemon name={cards[pickedIndex]?.name} url={cards[pickedIndex]?.url} onClose={() => setPokemonDataFlag(false)} theme={theme} />}
      <div className="second-player-container">
      {mode === "cpu" ? <h2 id="cpu-title">CPU</h2> : <h2 id="second-player-title">Player 2</h2>}
      <div className={`${mode}-player ${theme}`}>
        {found2.map((pair, idx) => (
          <div key={idx} className="card-pair" onClick={() => {
            const cardIndex = cards.findIndex(card => card.id === pair[0].id);
            showPokemonCard(cardIndex);
          }}>
            <img src={pair[0].src} alt={pair[0].name} className="card-img" />
            <img src={pair[1].src} alt={pair[1].name} className="card-img overlap" />
          </div>
        ))}
      </div>
      </div>
      <div className="game-area">
      <div className="turn-indicator left">
        {turn === 1 ? `Turn: ${player1Mode}` : <img src={pokemonAnimation} alt="charmander!" width="100px" />}
      </div>
      <div className={`game-board ${theme}`}>
        {cards.map((card, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            {!removed[index] ? (
              <div
                className={`card${flipped[index] ? " flipped" : ""}`} 
                onClick={() => pickCard(index)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src="/assets/back.png" alt="back" />
                  </div>
                  <div className="card-back">
                    <img src={card.src} alt={card.name} />
                  </div>
                </div>
              </div>
            ) : (
              // Deja el hueco vacío para mantener el grid
              <div className={`empty-card ${theme}`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="turn-indicator right">
        {turn === 2 ? `Turn: ${player2Mode}` : <img src={pokemonAnimation} alt="pikachu!" width="100px" />}
      </div>
      </div>
      <div className="first-player-container">
      <h2 id="first-player-title">{player1Mode}</h2> 
      <div className={`first-player ${theme}`}>
        {found1.map((pair, idx) => (
          <div key={idx} className="card-pair" onClick={() => {
            const cardIndex = cards.findIndex(card => card.id === pair[0].id);
            showPokemonCard(cardIndex);
          }}>
            <img src={pair[0].src} alt={pair[0].name} className="card-img" />
            <img src={pair[1].src} alt={pair[1].name} className="card-img overlap" />
          </div>
        ))}
      </div>    
      </div> 
  </>
  );
};

export default Game;