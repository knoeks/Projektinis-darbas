import { useForm } from "react-hook-form";
import { useState } from "react";
import { post } from "../helpers/post";
import { updateOne } from "../helpers/update";

function Form({ title, setFormOpen }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const isTrending = watch("isTrending", "");

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

      if (isTrending === true) {
        setValue(
          "thumbnail",
          { regular: { large: base64 }, trending: { large: base64 } },
          { shouldValidate: true }
        );
      } else {
        setValue(
          "thumbnail",
          { regular: { large: base64 } },
          { shouldValidate: true }
        );
      }
    } catch (error) {
      console.error("Error converting file:", error);
    }
  };

  const formSubmitHandler = async (data) => {
    try {
      if (!data.thumbnail?.regular?.large) {
        setError("Thumbnail is required");
        return;
      }

      const formattedData = {
        ...data,
        isTrending: data.isTrending === "true",
        isBookmarked: false,
      };
      if (title) {
        await updateOne(title.id, formattedData);
        setFormOpen(false);
      } else {
        await post(formattedData);
      }
      reset();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        noValidate
        className="text-center p-3"
      >
        <div className="p-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9/\-,.?=]+$/,
                message: "Invalid symbol(s) in the field",
              },
            })}
          />
          <div className="text-red">{errors.title?.message}</div>
        </div>
        <div className="p-3">
          <label htmlFor="thumbnail">Thumbnail:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="thumbnail"
            // {...register("thumbnail", { required: "This field is required" })}
          />
          {/* <div className="text-red">{errors.thumbnail?.message}</div> */}
        </div>
        <div className="p-3">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            {...register("year", { required: "This field is required" })}
          />
          <div className="text-red">{errors.year?.message}</div>
        </div>
        <div className="p-3">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            {...register("category", { required: "This field is required" })}
          >
            <option>Select category</option>
            <option value="Movie">Movie</option>
            <option value="TV Series">TV Series</option>
          </select>
          <div className="text-red">{errors.category?.message}</div>
        </div>
        <div className="p-3">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            {...register("rating", { required: "This field is required" })}
          >
            <option>Select age rating</option>
            <option value="E">General Audiences</option>
            <option value="PG">Parental Guidance Suggested</option>
            <option value="18+">Adults Only</option>
          </select>
          <div className="text-red">{errors.rating?.message}</div>
        </div>
        <div className="p-3">
          <label>Is Trending?</label>
          <input
            type="radio"
            id="isTrendingTrue"
            value="True"
            {...register("isTrending", { required: "Field is required" })}
          />
          <label htmlFor="isTrendingTrue">Yes</label>
          <input
            type="radio"
            id="isTrendingFalse"
            value="False"
            {...register("isTrending", { required: "Field is required" })}
          />
          <label htmlFor="isTrendingFalse">No</label>
          <div className="text-red">{errors.isTrending?.message}</div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-yellow-300 p-3 rounded border border-black shadow-slate-600 shadow"
        />
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </>
  );
}

export default Form;
