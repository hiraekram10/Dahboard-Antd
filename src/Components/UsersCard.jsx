import React from "react";
import { Card } from "antd";
import "./content.css"; // Import the CSS file

const UsersCard = () => {
  const users = [
    {
      id: 1,
      name: "Smith John",
      country: "India",
      avatar: "https://admin.pixelstrap.net/riho/assets/images/user/22.png", // Replace with actual avatar URL
    },
    {
      id: 2,
      name: "Robert Fox",
      country: "Afghanistan",
      avatar: "https://admin.pixelstrap.net/riho/assets/images/user/28.png", // Replace with actual avatar URL
    },
    {
      id: 3,
      name: "Darlene Robertson",
      country: "Georgia",
      avatar: "https://admin.pixelstrap.net/riho/assets/images/user/26.png", // Replace with actual avatar URL
    },
    {
      id: 4,
      name: "Floyd Miles",
      country: "Pakistan",
      avatar: "https://admin.pixelstrap.net/riho/assets/images/user/24.png", // Replace with actual avatar URL
    },
    {
      id: 5,
      name: "Jacob Jones",
      country: "Monaco",
      avatar: "https://admin.pixelstrap.net/riho/assets/images/user/49.png", // Replace with actual avatar URL
    },
  ];

  return (
    <Card title={<h1 style={{color:'#fff'}}>Users</h1>} className="user-container">
      {users.map((user) => (
        <div className="user-row" key={user.id}>
          <div className="user-left">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div>
              <p className="user-name">{user.name}</p>
              <p className="user-country">{user.country}</p>
            </div>
          </div>
          <div className="user-options">
            <i className="ellipsis-icon">⋮</i>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default UsersCard;
