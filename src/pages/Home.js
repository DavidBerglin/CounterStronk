import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>CounterStronk</h1>
        <p>CS2's holy dumpster of skins, tierlists and opinions you never asked for.</p>
        <Link to="/blog" className="hero-button">🔥 See our latest roasts</Link>
      </div>
    </div>
  );
}

export default Home;
