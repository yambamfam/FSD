import { Link } from "react-router-dom";
import "./common.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">TEAM BIRBAL</h1>
      <p className="welcome-message">Welcome to the BIRBAL Team Management</p>
      <div className="manage-box">
        <h2>MANAGE TEAM</h2>
        <div className="button-container">
          <Link to="/add" className="btn">Add Member</Link>
          <Link to="/members" className="btn">View Members</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
