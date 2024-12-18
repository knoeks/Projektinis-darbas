import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
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
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

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
    if (!file) return;
    try {
      const base64 = await convertToBase64(file);
      setValue(
        "thumbnail",
        { regular: { large: base64 }, trending: { large: base64 } },
        { shouldValidate: true }
      );
    } catch (error) {
      console.error("Error converting file:", error);
    }
  };

  useEffect(() => {
    if (title) {
      const { title, year, category, rating, isTrending } = title;
      setValue("title", title);
      setValue("year", year);
      setValue("category", category);
      setValue("rating", rating);
      setValue("isTrending", isTrending);
    }
  }, [title, setValue]);

  const formSubmitHandler = async (data) => {
    try {
      if (!data.thumbnail?.regular?.large) {
        setError("Thumbnail is required");
        return;
      }

      const formattedData = {
        ...data,
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
        {!title && (
          <div className="p-3">
            <label htmlFor="thumbnail">Thumbnail:</label>
            <input
              type="file"
              accept="image/*"
              id="thumbnail"
              {...register("thumbnail", {
                required: "This field is required",
                validate: (fileList) =>
                  fileList?.length > 0 || "File is required",
              })}
              onChange={(e) => {
                handleFileChange(e);
                setValue("thumbnail", e.target.files, { shouldValidate: true });
              }}
            />
            <div className="text-red">{errors.thumbnail?.message}</div>
          </div>
        )}
        <div className="p-3">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            {...register("year", {
              required: "This field is required",
              validate: {
                minYear: (value) =>
                  value >= 1900 || "Year must be 1900 or later",
                maxYear: (value) =>
                  value <= new Date().getFullYear() ||
                  `Year cannot exceed ${new Date().getFullYear()}`,
              },
            })}
          />
          <div className="text-red">{errors.year?.message}</div>
        </div>
        <div className="p-3">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            {...register("category", {
              required: "This field is required",
              validate: (value) =>
                value !== "Select category" || "Please select a valid category",
            })}
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
            {...register("rating", {
              required: "This field is required",
              validate: (value) =>
                value !== "Select age rating" || "Please select a valid rating",
            })}
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
            value={true}
            {...register("isTrending", { required: "Field is required" })}
          />
          <label htmlFor="isTrendingTrue">Yes</label>
          <input
            type="radio"
            id="isTrendingFalse"
            value={false}
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
