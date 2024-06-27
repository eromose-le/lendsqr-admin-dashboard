import "./user.scss";
import { lendsqlApi } from "@/store/storeQuerySlice";

import { FC } from "react";
import { assets } from "@/assets/constants";
import { useNavigate } from "react-router-dom";
import UserInformation from "@/common/UserInformation";
import EducationInformation from "@/common/EducationInformation";
import SocialInformation from "@/common/SocialInformation";
import GuarantorInformation from "@/common/GuarantorInfomation";
import UserDetailTabSwitcher from "@/common/UserDetailTabSwitcher";
import UserInformationHeader from "@/common/UserInformationHeader";
import { useSelector } from "react-redux";
import Loading from "@/common/Loading";

const UserDetails: FC = () => {
  const navigate = useNavigate();
  const userDetailsExist = useSelector(
    (state: any) => state?.global?.userDetail
  );

  const userQueryResultResponse = lendsqlApi.useGetUserQuery(undefined, {
    skip: !!userDetailsExist,
  });

  const userQueryResult = !!userDetailsExist
    ? userDetailsExist
    : userQueryResultResponse?.data;

    if (userQueryResultResponse.isLoading) {
      <Loading />;
    }

  return (
    <div className="dashboard">
      <div className="header">
        <div className="navigation" onClick={() => navigate(-1)}>
          <img src={assets.back} alt="back-arrow" />
          <p>Back to Users</p>
        </div>

        <div className="userDetailContainer">
          <h3>User Details</h3>
          <div className="userDetailsButtonContainer">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>

        <UserInformationHeader
          {...{
            avatar: assets.avatar,
            firstName: userQueryResult?.profile?.firstName || "",
            lastName: userQueryResult?.profile?.lastName || "",
            accountNumber: userQueryResult?.accountNumber || "",
            tier: userQueryResult?.tier || "",
            rating: userQueryResult?.rating || 0,
            accountBalance: userQueryResult?.accountBalance || "",
          }}
        />

        <UserDetailTabSwitcher />
      </div>

      <div className="dashInfoBodyContainer">
        <UserInformation
          {...{
            title: "Personal Information",
            firstName: userQueryResult?.profile?.firstName || "",
            lastName: userQueryResult?.profile?.lastName || "",
            phoneNumber: userQueryResult?.profile?.phoneNumber || "",
            email: userQueryResult?.email || "",
            bvn: userQueryResult?.profile?.bvn || "",
            gender: userQueryResult?.profile?.gender || "",
            maritalStatus: userQueryResult?.maritalStatus || "",
            children: userQueryResult?.children || "",
            residence: userQueryResult?.residence || "",
          }}
        />
        <EducationInformation
          {...{
            title: "Education and Employment",
            level: userQueryResult?.education?.level || "",
            employmentStatus:
              userQueryResult?.education?.employmentStatus || "",
            sector: userQueryResult?.education?.sector || "",
            duration: userQueryResult?.education?.duration || "",
            officeEmail: userQueryResult?.education?.officeEmail || "",
            monthlyIncome: userQueryResult?.education?.monthlyIncome || "",
            loanRepayment: userQueryResult?.education?.loanRepayment || "",
          }}
        />
        <SocialInformation
          {...{
            title: "Socials",
            twitter: userQueryResult?.socials?.twitter || "",
            facebook: userQueryResult?.socials?.facebook || "",
            instagram: userQueryResult?.socials?.instagram || "",
          }}
        />
        <GuarantorInformation
          {...{
            title: "Guarantor",
            firstName: userQueryResult?.guarantor?.firstName || "",
            lastName: userQueryResult?.guarantor?.lastName || "",
            phoneNumber: userQueryResult?.guarantor?.phoneNumber || "",
            email: userQueryResult?.guarantor?.email || "",
            relationship: userQueryResult?.guarantor?.relationship || "",
          }}
        />
      </div>
    </div>
  );
};

export default UserDetails;
