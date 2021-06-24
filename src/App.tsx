//import { greet } from "./utils/greet";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
  // return <h1>{greet("World")}</h1>;
}

export default App;
