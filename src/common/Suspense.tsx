import { Suspense as ReactSuspense, SuspenseProps } from "react";

function Suspense(props: SuspenseProps) {
  return <ReactSuspense {...props} />;
}

// TODO: add loading indicator
Suspense.defaultProps = {
  fallback: (
    <div className="flex justify-center items-center p-8 h-full">
      <h1>Loading...</h1>
    </div>
  ),
};

export default Suspense;
