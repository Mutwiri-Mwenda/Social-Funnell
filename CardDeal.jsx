import { card, stock5 } from "../assets";
import styles, {layout} from "../style";
import Button from './Button'

const CardDeal = () =>(
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Launch
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
            Deploying final strategy, walking with client in the implementation phase, or developing an implementation roadmap, and handover.
            PROJECT CLOSE
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={stock5} alt="card" className="w-[400px] h-[400px] rounded-md" />
      </div>
    </section>
  )


export default CardDeal