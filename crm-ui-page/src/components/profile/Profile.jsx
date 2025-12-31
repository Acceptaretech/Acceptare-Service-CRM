import "./Profile.css";
function Profile() {
  return (
    <div className="page">
      <div className="card">
        <h2>User Profile</h2>
        <div className="profile-row">
          <span>Name</span>
          <p>Diksha Gupta</p>
        </div>
        <div className="profile-row">
          <span>Email</span>
          <p>diksha@gmail.com</p>
        </div>
        <div className="profile-row">
          <span>Role</span>
          <p>Admin</p>
        </div>
        <div className="profile-row">
          <span>Phone</span>
          <p>9876543210</p>
        </div>
        <button className="btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
