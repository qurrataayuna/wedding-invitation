"use client";

import { useState } from "react";
import { pacifico } from "@/utils/fonts";
import { clsx } from "clsx";
import { invitationTranslation as t } from "@/utils/translation";
import SectionWrapper from "../section-wrapper";
import BottomSheet from "../bottom-sheet";
import AccountCard from "../account-card";

const GiftSection = () => {
  const { sign_of_affection: signOfAffection } = t;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SectionWrapper style="text-center pb-16" withMargin>
        <p className={clsx(pacifico.className, "text-base pt-16 pb-4")}>
          {signOfAffection.title}
        </p>
        <p className="pb-6">{signOfAffection.message1}</p>
        <p className="pb-6">{signOfAffection.message2}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "#415a78",
            color: "#e0e1dd",
            borderRadius: "4px",
            padding: "8px 32px",
          }}
        >
          {signOfAffection.cta}
        </button>
      </SectionWrapper>

      <BottomSheet isOpen={isOpen} handleClose={handleClose}>
        <div className="pb-16">
          <p className={clsx(pacifico.className, "text-base pt-16 pb-4")}>
            {signOfAffection.cta}
          </p>

          <AccountCard account={signOfAffection.bride} image={"/nagari.png"} />
          <AccountCard account={signOfAffection.groom} image={"/bri.png"} />
        </div>
      </BottomSheet>
    </>
  );
};

export default GiftSection;
