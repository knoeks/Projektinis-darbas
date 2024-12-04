import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {post} from "../../helpers/post.js"

const AddItemForm = (props) => {
  const { setItems } = props;
  const { register, handleSubmit, formState: { errors}, reset } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const newItem = await post(data);
      setItems(prev => [...prev, newItem]);

      reset();
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <section>
        <select {...register("category", {required: "Category is required"})} className="select select-bordered" id="category">
          <option value="furniture">Furniture</option>
          <option value="tech">Tech</option>
          <option value="clothing">Clothing</option>
          <option value="💀">💀</option>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
        </select>
        <p className="text-error">{errors.category?.message}</p>
      </section>
      <section>
        <input id="name" {...register("name", {required: "Name is required"})} type="text" placeholder="Name" className="input input-bordered"/>
        <p className="text-error">{errors.name?.message}</p>
      </section>
      <section>
        <input id="value" {...register("value", {required: "Value is required"})} type="text" placeholder="Value"
               className="input input-bordered"/>
        <p className="text-error">{errors.value?.message}</p>
      </section>
      <section>
        <input id="quantity" {...register("quantity", {
            required: "Quantity is required",
            validate: (value) => {
              if (Number(value) < 0)
                return "Value too low";
              else if (Number(value) > 1000000)
                return "Value too high";
            }
          }
        )} type="number" placeholder="Quantity" className="input input-bordered"/>
        <p className="text-error">{errors.quantity?.message}</p>
      </section>
      <button className="btn btn-primary" type="submit">Add Item</button>
      {error && <p className="text-errir">{error}</p>}
    </form>
  );
};

export default AddItemForm;
