import { pacifico, robotoSlab } from "@/utils/fonts";
import styles from "./styles.module.css";

const EventCard = ({ details }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={`${pacifico.className} pb-6`}>
        <p className={styles["text-blue"]}>{details.day}</p>
        <p className="text-xl">{details.date}</p>
      </div>

      <div className={`${robotoSlab.className} pb-6`}>
        <p className={styles["text-blue"]}>{details.venue}</p>
        <p className="font-light">{details.venue_address}</p>
      </div>

      <div className={`${robotoSlab.className} flex space-around`}>
        <div>
          <p className="text-sm">{details.event1_title}</p>
          <p className="text-sm font-light">{details.event1_time}</p>
        </div>
        <div>
          <p className="text-sm">{details.event2_title}</p>
          <p className="text-sm font-light">{details.event2_time}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
