
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUsers(signal) {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { signal }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data.");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading dashboard data...</p>;

  if (error) {
    return (
      <div className="panel">
        <p className="error">{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  const companies = new Set(users.map((user) => user.company.name));
  const cities = new Set(users.map((user) => user.address.city));

  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p className="subtitle">Your application at a glance.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Users</span>
          <h2>{users.length}</h2>
          <p>Users returned by the API</p>
        </div>

        <div className="stat-card">
          <span>Companies</span>
          <h2>{companies.size}</h2>
          <p>Unique companies in the sample</p>
        </div>

        <div className="stat-card">
          <span>Cities</span>
          <h2>{cities.size}</h2>
          <p>Unique cities in the sample</p>
        </div>
      </div>

      <div className="panel">
        <h2>Recent Users</h2>

        {users.slice(0, 5).map((user) => (
          <div className="user-row" key={user.id}>
            <div className="user-info">
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
            <span>{user.address.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
