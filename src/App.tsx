import { greet } from "./utils/greet";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  );
  // return <h1>{greet("World")}</h1>;
}

export default App;
