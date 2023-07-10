import { card } from "../assets";
import { ourservices } from "../constants";
import styles from "../style";
import OurServices from "./OurServices";

const Approach = () => {
  return (
    <div className="w-full flex justify-between items-center md:flex-row flex col sm:mb-16 mb-6 relative z-[1] mt-12">
    <h1 className={styles.heading2}>
      Our Approach
    </h1>
    <div className="w-full md:mt-0 mt-6">
      <p className={`${styles.paragraph} text-left max-w-[450px]`}>
         We, in principle, follow a 4 phase approach in client assignments. While every project is unique and
         requires bespoke approaches, this general framework is useful to us to:
      </p>
    </div>
  </div>
  )
}

export default Approach