const API_URL = "http://localhost:5000/api/items";
// const API_URL = "https://my-backend-4-k9yh.onrender.com/api/items"

export const getItems = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addItem = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateItem = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteItem = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
