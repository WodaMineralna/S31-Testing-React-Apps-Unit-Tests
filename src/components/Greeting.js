import { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function handleChangeText() {
    setChangedText((prev) => !prev);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
}
