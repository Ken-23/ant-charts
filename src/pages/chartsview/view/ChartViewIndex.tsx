import Charts from "./Charts";
import DropDown from "./DropDown";
import Header from "./Header";
import styles from "./styles.module.css";

export default function ChartViewIndex() {
  return (
    <div className={styles.container}>
      <Header />
      <DropDown />
      <Charts />
    </div>
  );
}
