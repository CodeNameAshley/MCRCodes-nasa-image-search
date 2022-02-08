import React from "react";
import "../styles/SearchResults.css";

export default function SearchResults({ results }) {
  console.log(results);
  //   if (!results.length) {
  //     // return <p>No Results</p>;
  //   } else {
  return (
    <div>
      {results &&
        results.map((image, index) => (
          <img
            key={index}
            className="card-image"
            src={image}
            alt="photos of space"
          />
        ))}
    </div>
  );
}
