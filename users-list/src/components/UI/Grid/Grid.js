import React from "react";
import classes from "./Grid.module.css";

const Grid = (props) => {
  const {
    title,
    filterData,
    onFilterChange,
    onFilterApplied,
    children,
  } = props;
  const filterControls = filterData.map((f) => {
    return (
      <input
        key={f.name}
        name={f.name}
        type="text"
        placeholder={f.placeholder}
        value={f.value}
        onChange={(evt) => onFilterChange(f.name, evt)}
      />
    );
  });

  return (
    <>
      <h2>{title}</h2>
      <div className={classes.FilterControls}>
        <div>{filterControls}</div>
        <button onClick={onFilterApplied}>Filter</button>
      </div>
      <div className={classes.ContentContainer}>{children}</div>
    </>
  );
};

export default Grid;
