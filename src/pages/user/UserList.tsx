import { Statistics } from "@/common/Statistics";
import { Table } from "@/common/Table";
import { FC } from "react";
import "./table.scss"

const UserList: FC = () => {
  return (
    <div className="dashboard">
      {/* header */}
      <div className="header">
        {/* details */}
        <div className="userDetailContainer">
          <h3>User</h3>
        </div>

        {/* user info */}
        <div className="overviewContainer">
          <Statistics />
        </div>
      </div>

      {/* table */}
      <Table />
    </div>
  );
};

export default UserList;
