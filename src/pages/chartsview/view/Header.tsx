import PrimaryHeader from "../../../components/atoms/Headers/PrimaryHeader";
import SecondaryHeader from "../../../components/atoms/Headers/SecondaryHeader";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <PrimaryHeader
        className={styles.primary_header_txt}
        title="Welcome Test User!"
      />
      <SecondaryHeader
        className={styles.secondary_header_txt}
        title="Check category below!!"
      />
    </div>
  );
}
