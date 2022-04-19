import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./styles.css";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function DragDropFiles() {
   const [file, setFile] = useState(null);
   const handleChange = (file) => {
      console.log(file);
      setFile(file);
   };
   return (
      <div className="App">
         <h1>Hello To Drag & Drop Files</h1>
         <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            children={<p>asdfdfadsf</p>}
         />
      </div>
   );
}
