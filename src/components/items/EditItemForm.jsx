import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {getOne} from "../../helpers/get.js";
import {updateOne} from "../../helpers/update.js"

const EditItemForm = () => {
  const {register, handleSubmit, setValue, formState: {errors}} = useForm();
  const [error, setError] = useState("")
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await updateOne(params.id, data);
      navigate("/items");
    } catch (error) {
      setError(error.message);
    }
  }

  const getItem = async () => {
    try {
      const {category, name, value, quantity} = await getOne(params.id);

      setValue("category", category);
      setValue("name", name);
      setValue("value", value);
      setValue("quantity", quantity);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getItem();
  }, []);



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <section>
        <label htmlFor="category">Category</label>
        <select name="category" {...register("category", {required: true})} className="select select-bordered w-full" id="category">
          <option value="furniture">Furniture</option>
          <option value="tech">Tech</option>
          <option value="💀">💀</option>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
        </select>
        <p>{errors.category?.message}</p>
      </section>
      <section>
        <label htmlFor="name">Name</label>
        <input id="name "{...register("name", {required: "Name is required"})} type="text" placeholder="Name" className="input input-bordered w-full"/>
        <p className="text-error">{errors.name?.message}</p>
      </section>
      <section>
        <label htmlFor="value">Value</label>
        <input id="value" {...register("value", {required: "Value is required"})} type="text" placeholder="Value" className="input input-bordered w-full"/>
        <p className="text-error">{errors.value?.message}</p>
      </section>
      <section>
        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" {...register("quantity", {required: "Quantity is required", validate: (value) => {
            if (Number(value) > 1000000)
              return "Quantity too high";
            else if (Number(value) < 0)
              return "Quantity too low";
          }})} type="number" placeholder="Quantity" className="input input-bordered w-full"/>
        <p className="text-error">{errors.quantity?.message}</p>
      </section>
      <button className="btn btn-accent" type="submit">Edit Item</button>
      {error && <p className="text-error">{error}</p>}
    </form>
  );
};

export default EditItemForm;
