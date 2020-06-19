import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './data/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Easter Egg (Konami Code)
((d, w) => {

  let store = [];

  let konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"].join(","); // encode the konami codeee

  d.addEventListener("keydown", (e) => {        
      store.push(e.key); // store the keydown values in an array

      store = store.slice(-10); // only store last 10 values

      if (store.join(",") === konami) { // check if the joined store array matches the konami string
          doTheThing(0); // do THE THING
      }
  })

  // doing the thing
  let hue = 0;
  let last = 0;
  const speed = 5000; // for the hue method
  let body = d.body
  let header = d.getElementById("main-heading");

  let doTheThing = time => {
      let dt = time - last;
      last = time;
    
       // using hue
      hue += dt / speed * 360;
      body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
      
      // Text fun
      if (Math.floor(hue) % 2) {
          header.style.color = "white";
        } else {
          header.style.color = "black";
        }

      requestAnimationFrame(doTheThing);
  };

})(document, window);

