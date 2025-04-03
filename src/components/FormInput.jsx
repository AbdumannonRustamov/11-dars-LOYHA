import React from "react";

function FormInput({ name, type, label, onChange }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white md:text-black">
        {label}
      </legend>
      <input
        type={type}
        className="input w-full"
        name={name}
        placeholder="Type here"
        required
        onChange={onChange} 
      />
    </fieldset>
  );
}

export default FormInput;
