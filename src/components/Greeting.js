import { useState } from "react";

import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function handleChangeText() {
    setChangedText((prev) => !prev);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
}
