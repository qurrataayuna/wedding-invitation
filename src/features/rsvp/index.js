import Image from "next/image";
import styles from "./styles.module.css";
import { clsx } from "clsx";
import { robotoSlab } from "@/utils/fonts";
import Link from "next/link";

const RSVP = ({ details, name, cta }) => {
  return (
    <div className={styles.wrapper}>
      <Image height={50} width={50} src="/whatsapp.png" alt="wa" />
      <p className="pt-4">{name}</p>
      <p className="font-semibold">{details}</p>
      <Link href={"https://wa.me/+6282389999601"}>
        <button className={clsx(styles.button, robotoSlab.className)}>
          {cta}
        </button>
      </Link>
    </div>
  );
};

export default RSVP;
