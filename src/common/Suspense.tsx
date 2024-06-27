import { Suspense as ReactSuspense, SuspenseProps } from "react";
import Loading from "./Loading";

function Suspense(props: SuspenseProps) {
  return <ReactSuspense {...props} />;
}

Suspense.defaultProps = {
  fallback: (
    <div className="flex justify-center items-center p-8 h-full">
      <Loading />
    </div>
  ),
};

export default Suspense;
