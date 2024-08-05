import "./App.css";

import Layout from "./Layout/Layout";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
