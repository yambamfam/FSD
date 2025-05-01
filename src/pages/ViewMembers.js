import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./formview.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/members").then((res) => {
      setMembers(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Team Members</h2>
      <div className="card-container">
        {members.map((m) => (
          <div className="card">
          <img src={`http://localhost:5000/uploads/${m.image}`} alt={m.name} />
          <h3>{m.name}</h3>
          <p>Roll Number: {m.roll}</p>
          <Link to={`/members/${m._id}`} className="btn blue">View Details</Link>
        </div>        
        ))}
      </div>
    </div>
  );
}
export default ViewMembers;
