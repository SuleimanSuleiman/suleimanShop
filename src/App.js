import React, { useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardItem from "./Components/CardItem/CardItem.jsx";
import Body from "./Components/body/Body";
import NavTop from "./Components/NavTop/NavTop.jsx";
import Nothing from "./Components/NoThing/Nothing";
import Login from "./Components/login/Login.jsx";

const initalState = {};

const reduce = (state, action) => {
  switch (action.type) {
    case "inc": {
      const updatedState = { ...state };
      updatedState[`${action.id}`].number += 1;
      return updatedState;
    }
    case "dec": {
      const updatedState = { ...state };
      updatedState[`${action.id}`].number -= 1;
      return updatedState;
    }
    case "create": {
      const updatedState = { ...state };
      updatedState[`${action.id}`] = {
        number: 1,
      };
      return updatedState;
    }
    case "delete": {
      console.log("delete");
      const updatedState = { ...state };
      delete updatedState[`${action.id}`];
      return updatedState;
    }
    case "deleteAll": {
      return initalState;
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [state, disPatch] = useReducer(reduce, initalState);
  return (
    <div className="container">
      <NavTop numOfCard={Object.keys(state).length} />
      <Routes>
        <Route path="/" element={<Body stateProps={{ state, disPatch }} />} />
        <Route
          path="/card"
          element={<CardItem stateProps={{ state, disPatch }} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nothing />} />
      </Routes>
    </div>
  );
}

export default App;
