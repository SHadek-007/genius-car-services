import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://pacific-shelf-11036.herokuapp.com/service";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className=" w-50 mx-auto">
      <h2 className="text-center my-3">Please Add Service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 py-1"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3 py-1"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3 py-1"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="w-50 mx-auto btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
