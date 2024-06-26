import React from "react";
import InformationItem, { InfoItemProps } from "./InformationItem";

type UserInformationProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  residence: string;
  title: string;
};

const UserInformation: React.FC<UserInformationProps> = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  bvn,
  gender,
  maritalStatus,
  children,
  residence,
  title,
}) => {
  const userInfoItems: InfoItemProps[] = [
    {
      title: "Full Name",
      value: `${firstName ?? ""} ${lastName ?? ""}`,
    },
    { title: "Phone Number", value: phoneNumber },
    { title: "Email Address", value: email },
    { title: "Bvn", value: bvn },
    { title: "Gender", value: gender },
    { title: "Marital Status", value: maritalStatus },
    { title: "Children", value: children },
    { title: "Type of Residence", value: residence },
  ];

  return (
    <div className="dashInfoItemBox">
      <h3 className="dashInfoHeader">{title}</h3>
      <div className="dashInfoWrapper">
        {userInfoItems.map((item, index) => (
          <InformationItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default UserInformation;
