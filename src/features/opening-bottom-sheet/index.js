"use client";

import { clsx } from "clsx";
import styles from "./styles.module.css";
import { useState } from "react";
import { robotoSlab } from "@/utils/fonts";
import { invitationTranslation as t } from "@/utils/translation";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const OpeningBottomSheet = ({ data }) => {
  const params = useSearchParams();
  const invitee = params.get("to");
  const [isOpen, setIsOpen] = useState(true);
  const { bottomsheet } = t;

  return (
    <div
      className={clsx(
        styles.bottomsheet,
        !isOpen && styles.hidden,
        robotoSlab.className,
        "text-center"
      )}
    >
      <div className="pb-32">
        <p className="text-xl font-light pb-4">{bottomsheet.wedding}</p>
        <Image
          src={"/bride-and-groom.png"}
          height={100}
          width={280}
          alt="brides"
        />
        <p className="pt-4 text-xl">08 . 05 . 2024</p>
      </div>
      {invitee && (
        <div className="pb-6">
          <p className="text-lg pb-2">{bottomsheet.to}</p>
          <p className="text-xl font-semibold">{invitee}</p>
        </div>
      )}
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {bottomsheet.cta}
      </button>
    </div>
  );
};

export default OpeningBottomSheet;
