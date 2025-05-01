import { useState } from "react";
import axios from "axios";
import "./formview.css";

function AddMember() {
  const [form, setForm] = useState({
    name: "", roll: "", year: "", degree: "", project: "",
    hobbies: "", certificate: "", internship: "", aboutaim: "", image: null
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) data.append(key, form[key]);
    await axios.post("http://localhost:5000/api/members", data);
    alert("Team member added!");
  };

  return (
    <div className="container">
      <h2 style={{ color: "blue" }}>Add Team Member</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="roll" placeholder="Roll Number" onChange={handleChange} required />
        <input name="year" placeholder="Year" onChange={handleChange} required />
        <input name="degree" placeholder="Degree" onChange={handleChange} required />
        <textarea name="project" placeholder="About Project" onChange={handleChange}></textarea>
        <input name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} />
        <input name="certificate" placeholder="Certificate" onChange={handleChange} />
        <input name="internship" placeholder="Internship" onChange={handleChange} />
        <textarea name="aboutaim" placeholder="About Your Aim" onChange={handleChange}></textarea>
        <input type="file" onChange={handleImageChange} required />
        <button type="submit" className="btn blue">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddMember;
