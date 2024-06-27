import { Statistics } from "@/common/Statistics";
import { FC } from "react";
import "./table.scss";
import { Table } from "@/common/Table";

const UserList: FC = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="userDetailContainer">
          <h3>User</h3>
        </div>

        <div className="overviewContainer">
          <Statistics />
        </div>
      </div>

      <Table />
    </div>
  );
};

export default UserList;
