import React, { useState } from "react";
import axios from "axios";
import "./Landing.css";

const Landing = () => {
   const [username, setUsername] = useState("");

   const handleChange = (e) => {
      setUsername(e.target.value);
   };

   const handleSubmit = () => {
      axios
         .post("http://localhost:9000/detect", {
            username: username,
         })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => console.log(err));
   };
   return (
      <div className="mainHeaderContainer">
         <h1>Detect Hate Speech against user</h1>
         <div className="formContainer">
            <input
               placeholder="Enter Twitter Username..."
               onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
         </div>
      </div>
   );
};

export default Landing;
