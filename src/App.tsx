import "./App.css";
import List from "./componentes/List";

function App() {
  const lista = [
    "item 01",
    "item 02",
    "item 03",
    "item 04",
    "item 05",
    // "item 06",
    // "item 07",
    // "item 08",
    // "item 09",
  ];
  return (
    <>
      <main className="w-3/4 hscreen mx-auto mt-8 p-8">
        <h1 className="mb-4">Texto titulo</h1>
        <List itens={lista}></List>
      </main>
    </>
  );
}

export default App;
