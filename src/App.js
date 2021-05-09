import "./App.css";
import Row from "./components/Row";
import { titles, genresList } from "./requests";
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {titles.map((title, i) => {
        return (
          <Row
            key={title}
            title={title}
            fetchUrl={genresList[i]}
            isLargeRow={title === "NETFLIX ORIGINALS" ? true : false}
          />
        );
      })}
    </div>
  );
}

export default App;
