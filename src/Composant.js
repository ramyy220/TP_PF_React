import { useEffect } from "react";

const Composant = ({ id, value, handle }) => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  return (
    <>
      <input
        id="amount"
        label="Montant"
        type="text"
        className={Number(value) ? "valid" : "invalid"}
        onChange={handle}
        value={value}
      />
      <span
        className="helper-text"
        data-error="Invalid"
        data-succes="Valid"
      ></span>
      <label htmlFor={id}> Montant </label>
    </>
  );
};

export default Composant;
