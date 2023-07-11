
import { card } from "../assets";
import { ourservices } from "../constants";
import styles from "../style";
import OurServices from "./OurServices";

const Business = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col justify-center`}>
      <div className="w-full flex justify-between items-center md:flex-row flex col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Our Services
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Let's Start By Understanding Your Business Objectives
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
        {ourservices.map((card) => (
        <OurServices key={card.id} {...card}/>
        ))}

      </div>
    </section>
  )
}

export default Business
