import React from "react";
import { StarRating } from "@/common/StarRating";

interface UserInformationHeaderProps {
  avatar: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  tier: string;
  rating: number;
  accountBalance: string;
}

const UserInformationHeader: React.FC<UserInformationHeaderProps> = ({
  avatar,
  firstName,
  lastName,
  accountNumber,
  tier,
  rating,
  accountBalance,
}) => {
  const sections = [
    {
      key: "cat1",
      content: (
        <div className="cat1">
          <img className="catUserIcon" src={avatar} alt="avatar" />
          <div className="nameContainer">
            <p className="name">
              {firstName} {lastName}
            </p>
            <p className="id">{accountNumber}</p>
          </div>
        </div>
      ),
    },
    {
      key: "cat2",
      content: (
        <div className="cat2">
          <p className="tierInfo">{tier}</p>
          <StarRating value={rating} readOnly />
        </div>
      ),
    },
    {
      key: "userAccountInfo",
      content: (
        <div className="userAccountInfo">
          <p className="amount">{accountBalance}</p>
          <p className="bankName">{accountNumber}/Providus Bank</p>
        </div>
      ),
    },
  ];

  return (
    <div className="userInfoContainer">
      {sections.map((section, index) => (
        <React.Fragment key={section.key}>
          {section.content}
          {index < sections.length - 1 && <div className="divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserInformationHeader;
