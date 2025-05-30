// import React, { useState } from "react";

// export default function Player() {
//   const [name, setName] = useState("");
//   const [newName, setNewName] = useState("");

//   function handle(e) {
//     setName(e.target.value);
//   }

//   function handle2() {
//     setNewName(name);
//   }
//   return (
//     <section id="player">
//       <h2>Welcome {newName || "unknown entity"}</h2>
//       <p>
//         <input type="text" onChange={handle} value={name} />
//         <button onClick={handle2}>Set Name</button>
//       </p>
//     </section>
//   );
// }

// --------------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-----------------------------------------
// UseRef

// import React, { useState, useRef } from "react";

// export default function Player() {
//   const [name, setName] = useState("");
//   const players = useRef();

//   function handle4() {
//     setName(players.current.value);
//     players.current.value = "";
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {name || "unknown entity"}</h2>
//       <p>
//         <input ref={players} type="text" />
//         <button onClick={handle4}>Set Name</button>
//       </p>
//     </section>
//   );
// }
//Newone--------

import React, { useRef, useState } from "react";

function ImageUploader() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
      />

      <button onClick={handleButtonClick}>Pick Image</button>

      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ marginTop: "20px", width: "300px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
