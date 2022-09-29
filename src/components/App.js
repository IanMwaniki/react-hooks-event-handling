import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";
// import FunctionClick from "./FunctionClick";
// import ClassClick from "./ClassClick";

function App() {
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
      {/* <FunctionClick />
      <ClassClick /> */}
    </div>
  
  );
}

export default App;
