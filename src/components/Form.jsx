import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { post } from "../helpers/post";
import { updateOne } from "../helpers/patch";

function Form({ title, setFormOpen }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const formSubmitHandler = async (data) => {
    try {
      if (title) {
        await updateOne(title.id, data);
        setFormOpen(false);
      } else {
        await post({ ...data, isBookmarked: false });
      }
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const base64 = await convertToBase64(file);
      setValue("thumbnail", base64);
    } catch (error) {
      console.error("Error converting file:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
          <div>{errors.title?.message}</div>
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="thumbnail"
            {...register("thumbnail", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            {...register("year", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            {...register("category", { required: "This field is required" })}
          >
            <option>Select category</option>
            <option>Movie</option>
            <option>TV Series</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            {...register("category", { required: "This field is required" })}
          >
            {/* <option>Select age rating</option> */}
          </select>
        </div>
        <div>
          <label htmlFor="isTrendingYes">Yes</label>
          <input
            type="radio"
            id="isTrendingYes"
            value="Yes"
            {...register("isTrendingYes", { required: "Field is required" })}
          />
          <label htmlFor="isTrendingNo">No</label>
          <input
            type="radio"
            id="isTrendingNo"
            value="no"
            {...register("isTrendingNo", { required: "Field is required" })}
          />
        </div>
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </>
  );
}

export default Form;
