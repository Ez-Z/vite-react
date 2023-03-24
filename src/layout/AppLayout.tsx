import { Routes, Route } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Home from "@/pages/Home";
import SecondPage from "@/pages/SecondPage";
// import { useRoutes } from "react-router-dom";
import RoutersOutlet from "@/RoutersOutlet";

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <RoutersOutlet />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default AppLayout;
