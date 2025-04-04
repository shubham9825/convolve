import React from "react";
import "../../assets/css/style.css";
import UserComponent from "./UserComponent";
import ImageComponent from "./ImageComponent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <h1>Welcome to your Dashboard</h1>
        <div className="interactive-section">
          <h3>Work in progress</h3>
          <UserComponent />
          <ImageComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
