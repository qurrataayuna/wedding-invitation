import { pacifico, robotoSlab } from "@/utils/fonts";
import { invitationTranslation as t } from "@/utils/translation";
import { clsx } from "clsx";
import SectionWrapper from "../section-wrapper";
import NameCard from "../name-card";
import EventCard from "../event-card";
import AccountCard from "../account-card";

const HomePage = () => {
  const {
    greetings,
    bride_and_groom: brideGroom,
    quote,
    event_details: eventDetails,
    sign_of_affection: signOfAffection,
  } = t;

  return (
    <div>
      <SectionWrapper style="text-center pb-16" withMargin>
        <p className="pb-6 italic">{greetings.opening_title}</p>
        <p>{greetings.opening_description}</p>
      </SectionWrapper>

      <SectionWrapper style="text-center pb-16" withMargin>
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

      <SectionWrapper style="text-center pb-20" withMargin>
        <hr />
        <p className="font-light italic pb-2 pt-6">{quote.context}</p>
        <p className="font-light italic pb-6">{quote.title}</p>
        <hr />
      </SectionWrapper>

      <SectionWrapper style="text-center pb-16">
        <EventCard details={eventDetails} />
      </SectionWrapper>

      <SectionWrapper style="text-center pb-16" withMargin>
        <p className="pb-6">{greetings.closing_description}</p>
        <p className="italic">{greetings.closing_title}</p>
      </SectionWrapper>

      <hr />

      <SectionWrapper style="text-center" withMargin>
        <p className={clsx(pacifico.className, "text-base pt-16 pb-4")}>
          {signOfAffection.title}
        </p>
        <AccountCard account={signOfAffection.bride} image="/nagari.png" />
        <AccountCard account={signOfAffection.groom} image="/bri.png" />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
