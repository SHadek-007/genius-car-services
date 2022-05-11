import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [sercices, setServices] = useServices([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `https://pacific-shelf-11036.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = sercices.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Manage Your Service</h2>
      {sercices.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}{" "}
            <button
              onClick={() => handleDelete(service._id)}
              className="ms-4 btn btn-danger"
            >
              Delete
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
