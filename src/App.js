
import Contatos from "./components/Contatos";
import Habilidades from "./components/Habilidades";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contatos />
    </div>
  );
}

export default App;
