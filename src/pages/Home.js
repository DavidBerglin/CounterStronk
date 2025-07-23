import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black", color: "lime", height: "100vh", textAlign: "center", paddingTop: "5rem" }}>
      <h1>CounterStronk</h1>
      <p>CS2's holy dumpster of skins, tierlists and opinions you never asked for.</p>
      <Link to="/blog" style={{ color: "yellow", fontSize: "20px" }}>🔥 See our latest roasts</Link>
    </div>
  );
}
