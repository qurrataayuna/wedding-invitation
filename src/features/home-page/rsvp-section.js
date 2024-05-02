"use client";

import { useState } from "react";
import { pacifico } from "@/utils/fonts";
import { clsx } from "clsx";
import { invitationTranslation as t } from "@/utils/translation";
import SectionWrapper from "../section-wrapper";
import BottomSheet from "../bottom-sheet";
import RSVP from "../rsvp";

const RSVPSection = () => {
  const { rsvp, bride_and_groom: brideGroom } = t;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SectionWrapper style="text-center pb-16" withMargin>
        <p className={clsx(pacifico.className, "text-base pt-8 pb-4")}>
          {rsvp.title}
        </p>
        <p className="pb-6">{rsvp.message}</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "#415a78",
            color: "#e0e1dd",
            borderRadius: "4px",
            padding: "8px 32px",
          }}
        >
          {rsvp.cta}
        </button>
      </SectionWrapper>

      <BottomSheet isOpen={isOpen} handleClose={handleClose}>
        <div className="pb-16">
          <p className={clsx(pacifico.className, "text-base pt-16 pb-4")}>
            {rsvp.title}
          </p>
          <RSVP
            details={rsvp.bride}
            name={brideGroom.bride_nickname}
            cta={rsvp.cta}
          />
          <RSVP
            details={rsvp.groom}
            name={brideGroom.groom_nickname}
            cta={rsvp.cta}
          />
        </div>
      </BottomSheet>
    </>
  );
};

export default RSVPSection;
