import React from "react";

const Sorter = ({ value, sortTasks }) => {

  const sortOptions = [
    { value: "title", label: "Title (asc)" },
    { value: "title desc", label: "Title (desc)" },
    { value: "date desc", label: "Newest" },
    { value: "date", label: "Oldest" },
    { value: "completed desc", label: "Completed first" },
    { value: "completed", label: "Completed last" },
  ]

  const handleChange = (e) => {
    if (!e || !e.target) return;

    const sortBy = e.target.value;
    sortTasks(sortBy);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1em" }}>
      <select
        id="sort-tasks"
        value={value}
        onChange={handleChange}
        style={{
          minWidth: "180px",
          padding: "0.75em 1em",
          borderRadius: "8px",
          border: "1px solid #242424",
          background: "#1a1a1a",
          color: "#fff",
          fontSize: "1em",
          fontFamily: "inherit",
          outline: "none",
        }}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Sorter;