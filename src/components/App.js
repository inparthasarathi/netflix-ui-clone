import Rows from "./Rows";
import "./css/App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
      <Footer />
    </div>
  );
}

export default App;
