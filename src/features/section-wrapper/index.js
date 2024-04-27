import { clsx } from "clsx";
import styles from "./styles.module.css";

const SectionWrapper = ({ children, withMargin, style }) => {
  return (
    <section
      className={clsx(styles.wrapper, withMargin && styles.withMargin, style)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
