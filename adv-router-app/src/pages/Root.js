import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // const navigation = useNavigation();
  // navigation.state === "";
  return (
    <>
      {/* <h1>RoutePage</h1> */}
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
