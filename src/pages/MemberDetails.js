import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./formview.css";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`).then((res) => {
      setMember(res.data);
    });
  }, [id]);

  if (!member) return <p>Loading...</p>;
  return (
    <div className="container">
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
      <h2>{member.name}</h2>
      <p><strong>Roll Number:</strong> {member.roll} - {member.degree} - {member.year}</p>
      <p><strong>Project:</strong> {member.project}</p>
      <p><strong>Certificate:</strong> {member.certificate}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <p><strong>About Your Aim:</strong> {member.aboutaim}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
    </div>
  );
}
export default MemberDetails;
