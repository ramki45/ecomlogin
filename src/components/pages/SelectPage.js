import React, { useState } from "react";
const SelectPage = (props) => {
  const [change, setChange] = useState("merchant");

  return (
    <div>
      <h1>Select Type</h1>
      <select value={change} onChange={setChange}>
        <option value="merchant">Merchant</option>
        <option value="customer">Customer</option>
      </select>
    </div>
  );
};

export default SelectPage;
