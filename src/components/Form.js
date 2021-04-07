import React from "react";

const Form = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} name="country" type="text" />
      <label htmlFor="country">Selecciona un pais</label>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
