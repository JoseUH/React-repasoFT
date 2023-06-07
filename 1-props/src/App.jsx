import "./App.css";
// import Carta from "./components/shared/gallery/Carta/Carta";
import Nav from "./core/nav/Nav";
import Home from "./pages/home/Home";

function App() {
  // const objeto = {
  //   title:"pera",
  //   image:"hshsh",
  //   descripcion:"hdhdhdh",
    
  // }
  return (
    <>
      <Nav />
      <Home />
      {/* <Carta elemento={objeto}/> */}
    </>
  );
}

export default App;
