import { CKEditor } from "@ckeditor/ckeditor5-react";
//import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Editor from "ckeditor5-custom-build/build/ckeditor";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import "./custom.css";

const TextEditor = () => {
   const [data, setData] = useState("");

   const handleChange = (e, editor) => {
      var editorData = editor.getData();
      setData(editorData);
      console.log(editorData);
   };
   useEffect(() => {
      //   DecoupledEditor.create(document.querySelector("#editor"))
      //      .then((editor) => {
      //         // The toolbar needs to be explicitly appended.
      //         document
      //            .querySelector("#toolbar-container")
      //            .appendChild(editor.ui.view.toolbar.element);
      //         window.editor = editor;
      //      })
      //      .catch((error) => {
      //         console.error(
      //            "There was a problem initializing the editor.",
      //            error
      //         );
      //      });
   });
   const req = { name: "dung", age: "19" };
   const handleClick = async () => {
      const res = await fetch("http://localhost:7000", {
         method: "POST",
         credentials: "include",
         headers: {
            "Access-Control-Allow-Origins": "http://localhost:3000",
            "Content-Type": "application/json",
         },

         body: JSON.stringify(req),
      });
      if (res.ok) {
         const data = await res.json();
         //console.log(res.headers);
      }
   };
   return (
      <div className="App">
         <h2>Using CKEditor 5 build in React</h2>
         <CKEditor
            editor={Editor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
               // You can store the "editor" and use when it is needed.
               console.log("Editor is ready to use!", editor);
               editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                     editor.ui.view.toolbar.element,
                     editor.ui.getEditableElement()
                  );

               //this.editor = editor;
            }}
            onChange={handleChange}
            onBlur={(event, editor) => {
               console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
               console.log("Focus.", editor);
            }}
            style={{ backgroundColor: "red" }}
         />
         <div id="toolbar-container"></div>
         <div id="editor" style={{ width: "100%" }}>
            {HTMLReactParser(data)}
         </div>
         <button onClick={handleClick}></button>
      </div>
   );
};
export default TextEditor;
