/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./component/Header";
import Header2 from "./component/Header2";
function App() {
  const [likes, setLikes] = useState(0);
  const students = ["sandhika", "Doody", "Erik"];

  function plusClicks() {
    setLikes(likes + 1);
  }
  function minClicks() {
    setLikes(likes - 1);
  }
  return (
    <>
      <Header author="Niko" />
      <Header author="WPU" />
      <Header2 />
      <Header2 name="Dimas" />
      <div>
        <button onClick={minClicks}>-</button>
        <p>({likes})</p>
        <button onClick={plusClicks}>+</button>
      </div>

      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
