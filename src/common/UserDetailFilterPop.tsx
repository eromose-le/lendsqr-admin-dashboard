import React from "react";

interface FilterItem {
  type: "select" | "input" | "date";
  label: string;
  id: string;
  options?: string[];
  placeholder?: string;
}

const filterItems: FilterItem[] = [
  {
    type: "select",
    label: "Organization",
    id: "organization",
    options: ["Select", "*"],
  },
  { type: "input", label: "Username", id: "username", placeholder: "User" },
  { type: "input", label: "Email", id: "email", placeholder: "Email" },
  { type: "date", label: "Calendar", id: "date" },
  {
    type: "input",
    label: "Phone Number",
    id: "phonenumber",
    placeholder: "Phone Number",
  },
  { type: "select", label: "Status", id: "status", options: ["Select", "*"] },
];

export const UserDetailFilterPop: React.FC = () => {
  return (
    <div className="filterContainer">
      {filterItems.map((item, index) => (
        <div className="filerItemBox" key={index}>
          <label className="filterLabel" htmlFor={item.id}>
            {item.label}
          </label>
          {item.type === "select" && (
            <div className="filterSubCustomBox">
              <select className="filterSelect" name={item.id} id={item.id}>
                {item.options?.map((option, i) => (
                  <option className="filterOption" key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          {item.type === "input" && (
            <input
              className="filterInput"
              type="text"
              id={item.id}
              placeholder={item.placeholder}
            />
          )}
          {item.type === "date" && (
            <div className="filerItemBox">
              <input
                className="filterDate"
                type="datetime-local"
                id={item.id}
              />
            </div>
          )}
        </div>
      ))}
      <div className="filterButtonContainer">
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </div>
  );
};
