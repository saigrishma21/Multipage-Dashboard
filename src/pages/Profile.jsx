
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>My Profile</h1>
      <p className="subtitle">Your account information.</p>

      <div className="panel profile-card">
        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <span className="status">Authenticated</span>
      </div>
    </div>
  );
}
