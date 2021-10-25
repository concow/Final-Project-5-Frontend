import React from "react";

export default function Home({ currentUser }) {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h1>Hello {currentUser.username}! Ready to Trade?</h1>

        {/* {some image} */}
      </div>
    </div>
  );
}
