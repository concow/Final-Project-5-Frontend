import React from "react";

export default function Home({ currentUser }) {
    console.log(currentUser)
  return (
    <div className="home-page">
      <div className="welcome-message">
        <p>Hello {currentUser.username}! Ready to Trade?</p>
      </div>
    </div>
  );
}
