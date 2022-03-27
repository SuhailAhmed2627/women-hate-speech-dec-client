import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "../Tweet/Tweet";
import "./Landing.css";

const Landing = () => {
   const [username, setUsername] = useState("");
   const [renderTweets, setRenderTweets] = useState(false);
   const [data, setData] = useState([]);
   const [status, setStatus] = useState("");

   const handleChange = (e) => {
      setUsername(e.target.value);
   };

   const handleSubmit = () => {
      setStatus("Loading...");
      axios
         .post("http://localhost:9000/detect", {
            username: username,
         })
         .then((res) => {
            setData(res.data.data);
         })
         .catch((err) => console.log(err));
   };

   useEffect(() => {
      if (data.length > 0) {
         setRenderTweets(true);
         if (window.twttr) {
            window.twttr.widgets.load();
         }
      }
   }, [data]);

   return (
      <div className="mainHeaderContainer">
         {renderTweets ? (
            <div className="tweets">
               {data.map((tweet) => {
                  return (
                     <Tweet key={tweet.id} tweet={tweet} username={username} />
                  );
               })}
            </div>
         ) : (
            <>
               <h1>Detect Hate Speech against user</h1>
               <div className="formContainer">
                  <input
                     placeholder="Enter Twitter Username..."
                     onChange={handleChange}
                  />
                  <p>{status}</p>
                  <button onClick={handleSubmit}>Submit</button>
               </div>
            </>
         )}
      </div>
   );
};

export default Landing;
