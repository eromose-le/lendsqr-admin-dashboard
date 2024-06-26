import React, { useState } from "react";
import moment from "moment";
import { assets } from "@/assets/constants";
import { UserDetailMenuPop } from "./UserDetailMenuPop";


interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

interface TableBodyRowProps {
  user: User;
}

interface TableItem {
  content: string;
  isDate?: boolean;
  className?: string;
}

const tableItems = (user: User): TableItem[] => [
  { content: user.orgName },
  { content: user.userName },
  { content: user.email, className: "addSpace2" },
  { content: user.phoneNumber },
  {
    content: moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    isDate: true,
  },
  { content: "Pending", className: "tableStatus pending" },
];

export const TableBodyRow: React.FC<TableBodyRowProps> = ({ user }) => {
  const [isDetailModal, setIsDetailModal] = useState(false);
  return (
    <>
      <div className="tableBodyBox">
        {tableItems(user).map((item, index) => (
          <button
            key={index}
            className={`tableTitleBox ${item.className || ""}`}
          >
            <p className="tableMsg">{item.content}</p>
            {!item.isDate && (
              <img className="hideImg" src={assets.filter} alt="filter" />
            )}
          </button>
        ))}
        <button
          onClick={() => setIsDetailModal(!isDetailModal)}
          className="tableTitleBox row-col-7 tableTitlelastItem"
        >
          <img src={assets.dot} alt="filter" />
          {isDetailModal && <UserDetailMenuPop userId={user.id} />}
        </button>
      </div>
    </>
  );
};
