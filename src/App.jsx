import React, { useState } from "react";
import UserProfile from "./profile/UserProfile";
import ProfileEditForm from "./profile/ProfileEditForm";

const App = () => {
  const initialUser = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    id: "9608236103086",
    profilePicture: "https://source.unsplash.com/150x150/?profile",
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (editedUser) => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="App">
      {isEditing ? (
        <ProfileEditForm user={user} onSaveClick={handleSaveClick} />
      ) : (
        <UserProfile user={user} onEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default App;
