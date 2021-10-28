import React from "react";

export default function Home({ currentUser, loggedIn }) {
  return (
    
    <div className="home-page">
      <div className="welcome-message">
        <h1>Hello <i>{currentUser.username}</i> !</h1>
        <img src="https://media.istockphoto.com/photos/red-finance-arrow-isolated-on-white-background-picture-id900176194?k=20&m=900176194&s=170667a&w=0&h=JZrzV6TUJvDfpzp_Srn2hWXK-gyhfrb94oU--2vlCC4=" alt="stock-image"/>
      </div>
    </div>
  );
}
