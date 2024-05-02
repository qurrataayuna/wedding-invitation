"use client";
import { clsx } from "clsx";
import Image from "next/image";
import styles from "./styles.module.css";
import { robotoSlab } from "@/utils/fonts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { invitationTranslation as t } from "@/utils/translation";

const AccountCard = ({ account, image }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} width={300} height={45} alt="bank" />
      </div>
      <div className={clsx(robotoSlab.className, "text-center")}>
        <p className="pb-2">{account.bank_name}</p>
        <p className="pb-2 font-medium">{account.bank_account}</p>
        <p>{account.bank_holder}</p>
      </div>
      <CopyToClipboard text={account.bank_account}>
        <button
          onClick={() => handleCopyText()}
          style={{
            backgroundColor: "#415a78",
            color: "#e0e1dd",
            borderRadius: "4px",
            padding: "4px 32px",
          }}
        >
          {t.cta.copy}
        </button>
      </CopyToClipboard>
      {isCopied && <p style={{ color: "#F74545" }}>{t.bank_copied}</p>}
    </div>
  );
};

export default AccountCard;
