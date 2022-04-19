import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ImageCrop from "./ImageCrop/ImageCrop.jsx";
import src from "./Image.png";
import DragDropFiles from "./ImageCrop/DragDropFiles.jsx";
import GoogleLogin from "./GoogleLogin";
import TextEditor from "./CKEditor";

ReactDOM.render(
   <React.StrictMode>
      <TextEditor />
      {/* <ImageCrop src={src} /> */}
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
