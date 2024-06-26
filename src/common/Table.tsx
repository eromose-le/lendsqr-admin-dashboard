import React, { useState } from "react";
import { assets } from "@/assets/constants";
import { TableBodyRow } from "./TableBodyRow";
import { UserDetailFilterPop } from "./UserDetailFilterPop";
import moment from "moment";
import { TablePagination } from "./TablePagination";

interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

const generateMockData = (): User[] => {
  const statuses = ["Active", "Pending", "Blacklisted", "Inactive"];
  const organizations = ["Lendsqr", "Irorun", "Paystack", "Flutterwave"];
  const mockData: User[] = [];

  for (let i = 1; i <= 500; i++) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomOrg =
      organizations[Math.floor(Math.random() * organizations.length)];
    mockData.push({
      id: i.toString(),
      orgName: randomOrg,
      userName: `User${i}`,
      email: `user${i}@example.com`,
      phoneNumber: `080${Math.floor(Math.random() * 1000000000)}`,
      createdAt: moment()
        .subtract(Math.floor(Math.random() * 365), "days")
        .format(),
      status: randomStatus,
    });
  }

  return mockData;
};

console.log("generateMockData", generateMockData());

const headers = [
  { label: "Organization", key: "orgName", className: "row-col-1" },
  { label: "Username", key: "userName", className: "row-col-2" },
  { label: "Email", key: "email", className: "row-col-3 addSpace2" },
  { label: "Phone Number", key: "phoneNumber", className: "row-col-4" },
  { label: "Date Joined", key: "createdAt", className: "row-col-5" },
  { label: "Status", key: "status", className: "row-col-6" },
  { label: "", key: "actions", className: "row-col-7" },
];

export const Table: React.FC = () => {
  const users = generateMockData();

  const [isFilterModal, setIsFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="overviewTableContainer">
        <table className="table">
          {/* header */}
          <thead className="tableHeaderBox">
            {isFilterModal && <UserDetailFilterPop />}
            {headers.map((header, index) => (
              <tr>
                <th
                  key={index}
                  onClick={() => setIsFilterModal(!isFilterModal)}
                  className={`tableTitleBox ${header.className}`}
                >
                  <p className="tableText">{header.label}</p>
                  <img
                    className="filterIcon"
                    src={assets.filter}
                    alt="filter"
                  />
                </th>
              </tr>
            ))}
          </thead>

          {/* body */}
          <tbody>
            {currentPosts.map((user: User) => (
              <TableBodyRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
