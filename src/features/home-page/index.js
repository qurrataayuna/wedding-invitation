import { Suspense } from "react";
import { robotoSlab } from "@/utils/fonts";
import { invitationTranslation as t } from "@/utils/translation";
import { clsx } from "clsx";
import SectionWrapper from "../section-wrapper";
import NameCard from "../name-card";
import EventCard from "../event-card";
import OpeningBottomSheet from "../opening-bottom-sheet";
import GiftSection from "./gift-section";
import Image from "next/image";
import RSVPSection from "./rsvp-section";

const HomePage = () => {
  const {
    greetings,
    bride_and_groom: brideGroom,
    quote,
    event_details: eventDetails,
    rsvp,
  } = t;

  return (
    <Suspense>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <Image src="/ornament1.png" height={35} width={150} alt="ornament" />
        </div>

        <SectionWrapper style="text-center pb-20" withMargin>
          <p className="pb-6 italic">{greetings.opening_title}</p>
          <p>{greetings.opening_description}</p>
        </SectionWrapper>

        <SectionWrapper style="text-center pb-12" withMargin>
          <p className={clsx(robotoSlab.className, "font-medium pb-4")}>
            {brideGroom.title}
          </p>
          <NameCard
            leftAlign
            name={brideGroom.bride_name}
            parents={brideGroom.bride_parents}
          />
          <NameCard
            rightAlign
            name={brideGroom.groom_name}
            parents={brideGroom.groom_parents}
          />
        </SectionWrapper>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <Image
            src="/ornament-ring.png"
            height={35}
            width={60}
            alt="ornament"
          />
        </div>

        <SectionWrapper style="text-center pb-20 text-xs" withMargin>
          <p className="font-light italic pb-4">{quote.context}</p>
          <p className="font-light italic pb-6">{quote.title}</p>
        </SectionWrapper>

        <SectionWrapper style="text-center pb-16">
          <EventCard details={eventDetails} />
        </SectionWrapper>

        <SectionWrapper style="text-center pb-16" withMargin>
          <p className="italic pb-6 font-light">{t.prayer.context}</p>
          <p className="italic font-light">{t.prayer.title}</p>
        </SectionWrapper>

        <hr />

        <GiftSection />
        <RSVPSection />

        <hr />

        <SectionWrapper style="text-center pt-16 pb-16" withMargin>
          <p className="pb-6">{greetings.closing_description}</p>
          <p className="italic">{greetings.closing_title}</p>
        </SectionWrapper>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <Image src="/ornament1.png" height={35} width={150} alt="ornament" />
        </div>
      </div>

      <OpeningBottomSheet
        data={{
          bride: brideGroom.bride_nickname,
          groom: brideGroom.groom_nickname,
          date: `${eventDetails.day}, ${eventDetails.date}`,
        }}
      />
    </Suspense>
  );
};

export default HomePage;
