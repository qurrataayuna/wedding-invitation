import { pacifico } from "@/utils/fonts";
import { clsx } from "clsx";
import styles from "./styles.module.css";

const NameCard = ({ leftAlign, rightAlign, name, parents }) => {
  return (
    <div
      className={clsx(
        styles["dark-blue-bg"],
        leftAlign && styles["left-aligned"],
        rightAlign && styles["right-aligned"],
        "mb-4"
      )}
    >
      <p className={clsx(pacifico.className, "text-2xl pb-2")}>{name}</p>
      <p className="text-xs">{parents}</p>
    </div>
  );
};

export default NameCard;
