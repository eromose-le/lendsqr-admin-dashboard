import { Statistics } from "@/common/Statistics";
import { FC } from "react";
import "./table.scss";
import { Table2 } from "@/common/Table";
import { lendsqlApi } from "@/store/storeQuerySlice";

const UserList: FC = () => {
  const usersQueryResult = lendsqlApi.useGetUsersQuery();

  if (usersQueryResult.isLoading) {
    return <div>Loading...</div>;
  }

  const data = usersQueryResult?.isSuccess ? usersQueryResult?.data : [];
  

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

      {usersQueryResult?.isSuccess ? (
        <Table2 data={data} />
      ) : null}
    </div>
  );
};

export default UserList;
