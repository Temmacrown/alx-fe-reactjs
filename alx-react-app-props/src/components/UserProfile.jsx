import { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = () => {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "10px", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "navy", marginBottom: "8px" }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: "bold" }}>{age}</span></p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
