import { lendsqlApi } from "@/store/storeQuerySlice";
import { FC } from "react";
import { assets } from "@/assets/constants";

import { useNavigate, useParams } from "react-router-dom";
import { StarRating } from "@/common/StarRating";
import {
  EducationInfo,
  GuarantorInfo,
  SocialInfo,
  UserInfo,
} from "@/common/UserInfo";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const usersQueryResult = lendsqlApi.useGetUsersQuery();
  // const userQueryResult = lendsqlApi.useGetUserQuery();

  // console.log("usersQueryResult", usersQueryResult);
  // console.log("userQueryResult", userQueryResult.data);
  return <div className="dashboard">Dashboard Page</div>;
};

export default Dashboard;
