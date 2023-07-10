import { card, stock3 } from "../assets";
import styles, {layout} from "../style";
import Button from './Button'

const Audit = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Prototype
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        Designing an appropriate branding anddigital media strategy that responds to findings from phase 1, 
        coming up with templates and mockups, and presenting it to the management for approval.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={stock3} alt="card" className="w-[400px] h-[400px] rounded-md" />
      </div>
    </section>
  )
}

export default Audit