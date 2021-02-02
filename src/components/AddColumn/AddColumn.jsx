import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStatus } from "../../actions";

const AddColumn = ({ ...props }) => {
  const [data, setData] = useState({ name: "", rank: null });
  const disptach = useDispatch();
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Coulmn Name"
        onChange={(e) => {
          setData({ ...data, [e.target.name]: e.target.value });
        }}
      />
      <input
        name="rank"
        min={1}
        type="number"
        placeholder="Priority Rank Number"
        onChange={(e) => {
          setData({ ...data, [e.target.name]: e.target.value });
        }}
      />
      <button
        onClick={(() => disptach(addStatus(data)), props.newColumnHandler)}
      >
        Add Column
      </button>
    </div>
  );
};

export default AddColumn;
