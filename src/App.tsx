import "./app.scss";
import Loading from "./common/Loading";
import Suspense from "./common/Suspense";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
