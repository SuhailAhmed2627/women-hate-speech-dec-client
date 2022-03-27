import React from "react";
import "./Tweet.css";

const Tweet = (props) => {
   const tweet = props.tweet;
   return (
      <div className="tweetContainer">
         <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
               {tweet.text}
            </p>
            <a
               href={`https://twitter.com/${props.username}/status/${tweet.id}?ref_src=twsrc%5Etfw`}
               target="_blank"
            >
               View Tweet
            </a>
         </blockquote>
      </div>
   );
};

export default Tweet;
