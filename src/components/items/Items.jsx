import {useEffect, useState} from 'react';
import AddItemForm from "./AddItemForm.jsx";
import ItemTable from "./ItemTable.jsx";
import {getAll} from "../../helpers/get.js";


const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const getAllItems = async () => {
    try {
      const items = await getAll();
      setItems(items);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getAllItems();
  }, [])

  return (
    <section>
      <AddItemForm items={items} setItems={setItems}  />
      <ItemTable items={items} setItems={setItems} />
      {error && <p className="text-error">{error}</p>}
    </section>
  );
};

export default Items;
