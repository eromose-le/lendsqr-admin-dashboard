import { assets } from "@/assets/constants";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="loadingGif">
      <img src={assets.loading} alt="loading" />
    </div>
  );
};

export default Loading;
