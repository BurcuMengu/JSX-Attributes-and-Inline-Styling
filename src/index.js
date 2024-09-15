import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "30px",
  border: "1px solid black",
};

customStyle.color = " rgb(15, 14, 14)";

ReactDOM.render(
  <div>
    <h1
      style={customStyle}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      My Favourite Pictures
    </h1>
    <img alt="random" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
