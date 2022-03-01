import React from "react";
import { Redirect } from "react-router-dom";
import Main from "../components/Main";

const Home: React.FC = () => {
  if (true) {
    return <Redirect to="/" />;
  }
  return <Main />;
};

export default Home;
