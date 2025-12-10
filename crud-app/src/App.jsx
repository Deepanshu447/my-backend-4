import { useEffect, useState } from "react";
import { getItems, addItem, updateItem, deleteItem } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", age:"", mobile:""});
  const [editId, setEditId] = useState(null);

  const loadData = async () => {
    setItems(await getItems());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateItem(editId, form);
      setEditId(null);
    } else {
      await addItem(form);
    }
    setForm({ title: "", description: "", age:"",mobile:""});
    loadData();
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, description: item.description, age: item.age,mobile: item.mobile});
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <h2>CRUD App</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input placeholder="age"
        value={form.age}
        onChange={(e)=> setForm({...form,age: e.target.value})}
        />

        <input placeholder="mobile Number"
        value={form.mobile}
        onChange={(e)=> setForm({...form,mobile: e.target.value})}
        />

        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <ul className="crud-operation">
        {items.map((item) => (
          <li key={item._id}>
            <div><strong>{item.title}</strong> - {item.description} - {item.age} - {item.mobile}</div>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
