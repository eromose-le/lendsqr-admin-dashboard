import "./app.scss";
import Suspense from "./common/Suspense";
import AppRouter from "./router";

// TODO: add loading indicator
function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
