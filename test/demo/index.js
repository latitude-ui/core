import React from "react";
import { render } from "react-dom";
import { Button } from "../../src";

const App = () => {

    return <Button onClick={() => alert("ueee")} label="hello world"/>;
};


render(<App />, document.querySelector("#root"));