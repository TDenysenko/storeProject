import React, { useState } from "react";
import "./Form.scss";

const initalFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

function FormOrder() {
  const [formData, setFormData] = useState(initalFormValues);
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(event.target.value)) {
      return setError("Email is invalid");
    } else {
      setError(null);
    }

    if (formData.firstName === "") {
      return setError("First name is required");
    } else {
      setError(null);
    }

    if (formData.phoneNumber === "") {
      return setError("Phone number is required");
    } else {
      setError(null);
    }
    if (formData.address === "") {
      setError("Address is required");
    } else {
      setError(null);
    }

    // if (formData.firstName === "") {
    //   return setError(true);
    // }

    setFormData(initalFormValues);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  console.log(formData);
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => {
            setError(false);
            setFormData((prev) => {
              return { ...prev, firstName: event.target.value };
            });
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => {
            setError(false);
            setFormData((prev) => {
              return { ...prev, lastName: event.target.value };
            });
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(event) => {
            setError(false);
            setFormData((prev) => {
              return { ...prev, email: event.target.value };
            });
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
      <label>
        Phone number
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(event) => {
            setError(false);
            setFormData((prev) => {
              return { ...prev, phoneNumber: event.target.value };
            });
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
      <label>
        Address
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={(event) => {
            setError(false);
            setFormData((prev) => {
              return { ...prev, address: event.target.value };
            });
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
      <button type="submit">Order</button>
    </form>
  );
}

export default FormOrder;
