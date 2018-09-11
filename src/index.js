import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";

import { store } from "./store";

import "./styles.css";

class App extends React.Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

const render = () => ReactDOM.render(<App />, document.getElementById("root"));
render();
store.subscribe(render);
