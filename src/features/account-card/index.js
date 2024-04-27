import { clsx } from "clsx";
import Image from "next/image";
import styles from "./styles.module.css";
import { robotoSlab } from "@/utils/fonts";

const AccountCard = ({ account, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} width={65} height={65} alt="bank" />
      </div>
      <div className={clsx(robotoSlab.className, "text-start")}>
        <p className="pb-2">{account.bank_name}</p>
        <p className="pb-2 font-medium">{account.bank_account}</p>
        <p>{account.bank_holder}</p>
      </div>
    </div>
  );
};

export default AccountCard;
