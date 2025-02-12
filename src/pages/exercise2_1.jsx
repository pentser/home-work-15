
import { useState } from "react";
import "./pages.css";


const deckWithImage= [
  {
    name: "2♠",
    img: "spades_2.png",
    value: 2
  },
  {
    name: "3♠",
    img: "spades_3.png",
    value: 3
  },
  {
    name: "4♠",
    img: "spades_4.png",
    value: 4
  },
  {
    name: "5♠",
    img: "spades_5.png",
    value: 5
  },
  {
    name: "6♠",
    img: "spades_6.png",
    value:6
  },
  {
    name: "7♠",
    img: "spades_7.png",
    value: 7,
  },
  {
    name: "8♠",
    img: "spades_8.png",
    value:8
  },
  {
    name: "9♠",
    img: "spades_9.png",
    value:9
  },
  
  {
    name: "10♠",
    img: "spades_10.png",
    value:10
  },

  {
    name: "A♠",
    img: "spades_A.png",
    value:14
  },

  {
    name: "J♠",
    img: "spades_J.png",
    value:11
  },
  {
    name: "Q♠",
    img: "spades_Q.png",
    value: 12
  },
  {
    name: "K♠",
    img: "spades_K.png",
    value:13
  },
  //************************************************************* 

  {
    name: "2♥",
    img: "hearts_2.png",
    value:2
  },
  {
    name: "3♥",
    img: "hearts_3.png",
    value:3
  },
  {
    name: "4♥",
    img: "hearts_4.png",
    value:4
  },
  {
    name: "5♥",
    img: "hearts_5.png",
    value:5
  },
  {
    name: "6♥",
    img: "hearts_6.png",
    value:6

  },
  {
    name: "7♥",
    img: "hearts_7.png",
    value:7
  },
  {
    name: "8♥",
    img: "hearts_8.png",
    value:8
  },
  {
    name: "9♥",
    img: "hearts_9.png",
    value:9
  },
  {
    name: "10♥",
    img: "hearts_10.png",
    value:10
  },
  {
    name: "A♥",
    img: "hearts_A.png",
    value:14
  },
  {
    name: "J♥",
    img: "hearts_J.png",
    value:11
  },
  {
    name: "Q♥",
    img: "hearts_Q.png",
    value:12
  },
  {
    name: "K♥",
    img: "hearts_K.png",
    value:13
  },

  //****************************************************************** */
  {
    name: "2♣",
    img: "clubs_2.png",
    value:2
  },
  {
    name: "3♣",
    img: "clubs_3.png",
    value:3
  },
  {
    name: "4♣",
    img: "clubs_4.png",
    value:4
  },
  {
    name: "5♣",
    img: "clubs_5.png",
    value:5
  },
  {
    name: "6♣",
    img: "clubs_6.png",
    value:6
  },
  {
    name: "7♣",
    img: "clubs_7.png",
    value:7
  },
  {
    name: "8♣",
    img: "clubs_8.png",
    value:8
  },
  {
    name: "9♣",
    img: "clubs_9.png",
    value:9
  },
  {
    name: "10♣",
    img: "clubs_10.png",
    value:10
  },
  {
    name: "A♣",
    img: "clubs_A.png",
    value:14
  },
  {
    name: "J♣",
    img: "clubs_J.png",
    value:11
  },
  {
    name: "Q♣",
    img: "clubs_Q.png",
    value:12
  },
  {
    name: "K♣",
    img: "clubs_K.png",
    value:13
  },
 
  //*********************************************************** */
  {
    name: "2♦",
    img: "diamonds_2.png",
    value:2
  },
  {
    name: "3♦",
    img: "diamonds_3.png",
    value:3
  },
  {
    name: "4♦",
    img: "diamonds_4.png",
    value:4
  },
  {
    name: "5♦",
    img: "diamonds_5.png",
    value:5
  },
  {
    name: "6♦",
    img: "diamonds_6.png",
    value:6
  },
  {
    name: "7♦",
    img: "diamonds_7.png",
    value:7
  },
  {
    name: "8♦",
    img: "diamonds_8.png",
    value:8
  },
  {
    name: "9♦",
    img: "diamonds_9.png",
    value:9
  },
  {
    name: "10♦",
    img: "diamonds_10.png",
    value:10
  },
  {
    name: "A♦",
    img: "diamonds_A.png",
    value:14
  },
  {
    name: "J♦",
    img: "diamonds_J.png",
    value:11
  },
  {
    name: "Q♦",
    img: "diamonds_Q.png",
    value:12
  },
  {
    name: "K♦",
    img: "diamonds_K.png",
    value:13
  },
  {
    name: "coverComputer",
    img: "back_dark.png",
    value:100
  },
  {
    name: "coverUser",
    img: "back_light.png",
    value:101
  },


]




function shuffleIntoTwoPackets() {
  // 1. Create a standard 52-card deck
  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank}${suit}`);
    }
  }

  // 2. Shuffle deck using Fisher-Yates (Knuth) algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
  }

  // 3. Split deck into two 26-card packets
  const packet1 = deck.slice(0, 26);
  const packet2 = deck.slice(26, 52);

  return [packet1, packet2];
}


function Exercise2_1() {

//global value
let imgNameC=deckWithImage.find(item => item.value === 100).img;
let imgNameU=deckWithImage.find(item => item.value === 101).img;



const [pack1, pack2] = shuffleIntoTwoPackets();
console.log("First 26 cards:", pack1);
console.log("Second 26 cards:", pack2);

const [countC,setCountC] = useState(0);
const [countU,setCountU] = useState(0);

 const clickHandler = ()=>{
  setCountC(countC+1);
  setCountU(countU+1);

 }

  // const compareAndUpdate= ()=>{
   // C:\sv-college-exc\home-work-15\src\assets\cards\back_dark.png

  // }

  


  return (

     <div className="flex flex-col justify-items-center bg-gray-100">
      <h1 className="text-blue-500 text-5xl">Computer:</h1>
      <p>{pack1[countC]}</p>  
      <img className="w-50" src={"../src/assets/cards/" + imgNameC} alt="imgNameC" /> 
      <h1  className="text-blue-500 text-5xl">You</h1>
      <p>{pack2[countU]}</p>
      <img className="w-50" src={"../src/assets/cards/" + imgNameU} alt="imgNameU" /> 
      <button onClick={clickHandler} className="bg-blue-500 text-white font-medium">next</button>
     </div>
 
   
  )
}

export default Exercise2_1;
