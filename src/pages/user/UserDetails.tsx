import "./user.scss";
import { lendsqlApi } from "@/store/storeQuerySlice";

import { FC } from "react";
import { assets } from "@/assets/constants";
import { useNavigate } from "react-router-dom";
import UserInformation from "@/common/UserInformation";
import { UserDetail } from "@/types/user";
import EducationInformation from "@/common/EducationInformation";
import SocialInformation from "@/common/SocialInformation";
import GuarantorInformation from "@/common/GuarantorInfomation";
import UserDetailTabSwitcher from "@/common/UserDetailTabSwitcher";
import UserInformationHeader from "@/common/UserInformationHeader";

const UserDetails: FC = () => {
  const navigate = useNavigate();
  // const userQueryResult = lendsqlApi.useGetUserQuery();

  const userQueryResult: UserDetail = {
    profile: {
      firstName: "Grace",
      lastName: "Effiom",
      phoneNumber: "07060780922",
      bvn: "07060780922",
      gender: "Female",
    },
    email: "grace@gmail.com",
    tier: "User's Tier",
    rating: 1,
    accountBalance: "₦200,000.00",
    accountNumber: "9912345678",
    bankName: "Providus Bank",
    maritalStatus: "Single",
    children: "None",
    residence: "Parent's Apartment",
    education: {
      level: "B.Sc",
      sector: "FinTech",
      employmentStatus: "Employed",
      duration: "2 years",
      officeEmail: "grace@lendsqr.com",
      monthlyIncome: "₦200,000.00 - ₦400,000.00",
      loanRepayment: "₦40,000.00",
    },
    socials: {
      twitter: "@grace_effiom",
      facebook: "Grace Effiom",
      instagram: "@grace_effiom",
    },
    guarantor: {
      firstName: "Debby",
      lastName: "Ogana",
      phoneNumber: "07060780922",
      email: "debby@gmail.com",
      relationship: "Sister",
    },
  };

  return (
    <div className="dashboard">
      {/* header */}
      <div className="header">
        {/* navigation */}
        <div className="navigation" onClick={() => navigate(-1)}>
          <img src={assets.back} alt="back-arrow" />
          <p>Back to Users</p>
        </div>

        {/* details */}
        <div className="userDetailContainer">
          <h3>User Details</h3>
          <div className="userDetailsButtonContainer">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>

        {/* user info */}
        <UserInformationHeader
          {...{
            avatar: assets.avatar,
            firstName: userQueryResult?.profile?.firstName,
            lastName: userQueryResult?.profile?.lastName,
            accountNumber: userQueryResult?.accountNumber,
            tier: userQueryResult?.tier,
            rating: userQueryResult?.rating,
            accountBalance: userQueryResult?.accountBalance,
          }}
        />

        <UserDetailTabSwitcher />
      </div>

      <div className="dashInfoBodyContainer">
        <UserInformation
          {...{
            title: "Personal Information",
            firstName: userQueryResult?.profile?.firstName,
            lastName: userQueryResult?.profile?.lastName,
            phoneNumber: userQueryResult?.profile?.phoneNumber,
            email: userQueryResult?.email,
            bvn: userQueryResult?.profile?.bvn,
            gender: userQueryResult?.profile?.gender,
            maritalStatus: userQueryResult?.maritalStatus,
            children: userQueryResult?.children,
            residence: userQueryResult?.residence,
          }}
        />
        <EducationInformation
          {...{
            title: "Education and Employment",
            level: userQueryResult?.education?.level,
            employmentStatus: userQueryResult?.education?.employmentStatus,
            sector: userQueryResult?.education?.sector,
            duration: userQueryResult?.education?.duration,
            officeEmail: userQueryResult?.education?.officeEmail,
            monthlyIncome: userQueryResult?.education?.monthlyIncome,
            loanRepayment: userQueryResult?.education?.loanRepayment,
          }}
        />
        <SocialInformation
          {...{
            title: "Socials",
            twitter: userQueryResult?.socials?.twitter,
            facebook: userQueryResult?.socials?.facebook,
            instagram: userQueryResult?.socials?.instagram,
          }}
        />
        <GuarantorInformation
          {...{
            title: "Guarantor",
            firstName: userQueryResult?.guarantor?.firstName,
            lastName: userQueryResult?.guarantor?.lastName,
            phoneNumber: userQueryResult?.guarantor?.phoneNumber,
            email: userQueryResult?.guarantor?.email,
            relationship: userQueryResult?.guarantor?.relationship,
          }}
        />
      </div>
    </div>
  );
};

export default UserDetails;
