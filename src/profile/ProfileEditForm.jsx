import React, { useState } from "react";
import "./ProfileEditForm.css";

const ProfileEditForm = ({ user, onSaveClick }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="edit-profile">
      <img src={editedUser.profilePicture} alt={`${editedUser.firstName} ${editedUser.lastName}`} />
      <input type="text" name="firstName" placeholder="FirstName" value={editedUser.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" placeholder="LastName" value={editedUser.lastName} onChange={handleInputChange} />
      <input type="text" name="id" placeholder="ID" value={editedUser.id} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" value={editedUser.email} onChange={handleInputChange} />
      <button onClick={() => onSaveClick(editedUser)}>Save</button>
    </div>
  );
};

export default ProfileEditForm;
