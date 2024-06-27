import { assets } from "@/assets/constants";
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
  { type: "date", label: "Date", id: "date" },
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
              <div className="selectWrapper">
                <select className="filterSelect" name={item.id} id={item.id}>
                  {item.options?.map((option, i) => (
                    <option className="filterOption" key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <img
                  className="selectIcon"
                  src={assets.down}
                  alt="select icon"
                />
              </div>
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
            <div className="dateWrapper">
              <div className="filterItemBoxDate">
                <input className="filterDate" type="date" id={item.id} />
                <img
                  className="dateIcon"
                  src={assets.calender}
                  alt="date icon"
                />
              </div>
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
