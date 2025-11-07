import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    gender: "Male",
    dob: "",
    address: "",
    phonenumber: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch all patients on mount
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/patients/");
      setPatients(res.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.patch(
          `http://127.0.0.1:8000/api/patients/${editId}/`,
          formData
        );
        setEditId(null);
      } else {
        await axios.post("http://127.0.0.1:8000/api/patients/", formData);
      }

      // Reset form and refresh list
      setFormData({
        f_name: "",
        l_name: "",
        gender: "Male",
        dob: "",
        address: "",
        phonenumber: "",
      });
      fetchPatients();
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message);
      alert("Save failed! Check all fields and try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/patients/${id}/`);
      fetchPatients();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (patient) => {
    setFormData({
      f_name: patient.f_name,
      l_name: patient.l_name,
      gender: patient.gender,
      dob: patient.dob,
      address: patient.address,
      phonenumber: patient.phonenumber,
    });
    setEditId(patient.id);
  };

  return (
    <div className="App">
      <h1>Patient Manager</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="First Name"
          value={formData.f_name}
          onChange={(e) => setFormData({ ...formData, f_name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={formData.l_name}
          onChange={(e) => setFormData({ ...formData, l_name: e.target.value })}
          required
        />

        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          required
        />

        <textarea
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={(e) =>
            setFormData({ ...formData, phonenumber: e.target.value })
          }
          required
        />

        <button type="submit" className="submit-btn">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="patient-list">
        {patients.map((p) => (
          <li key={p.id} className="patient-card">
            <div className="patient-info">
              <h3>
                {p.f_name} {p.l_name}
              </h3>
              <p>Gender: {p.gender}</p>
              <p>DOB: {p.dob}</p>
              <p>Address: {p.address}</p>
              <p>Phone: {p.phonenumber}</p>
            </div>

            <div className="button-group">
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
