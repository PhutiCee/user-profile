import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user, onEditClick }) => {
  return (
    <div className="profile">
      <img src={user.profilePicture} alt={`${user.firstName} ${user.lastName}`} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
      <button onClick={onEditClick}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
