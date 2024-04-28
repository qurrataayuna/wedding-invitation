"use client";

import { clsx } from "clsx";
import styles from "./styles.module.css";
import { useState } from "react";
import { pacifico, robotoSlab } from "@/utils/fonts";
import { invitationTranslation as t } from "@/utils/translation";
import { useSearchParams } from "next/navigation";

const BottomSheet = ({ data }) => {
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
      <div className="pb-24">
        <p className="text-xl font-light pb-4">{bottomsheet.wedding}</p>
        <p className={clsx(pacifico.className, "text-5xl pb-2")}>
          {data.bride}
        </p>
        <p className={clsx(pacifico.className, "text-xl pb-2")}>&</p>
        <p className={clsx(pacifico.className, "text-5xl pb-4")}>
          {data.groom}
        </p>
        <p>{data.date}</p>
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

export default BottomSheet;
