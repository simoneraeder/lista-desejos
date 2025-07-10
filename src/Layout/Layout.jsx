import { Outlet } from "react-router";
import styles from "../App.module.css";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Layout = ({ onSearch, onClear }) => {
  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} onClear={onClear} />
      <Outlet />
      <Footer />
    </div>
  );
};
