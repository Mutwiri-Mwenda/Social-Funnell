import { apple, bill, google, stock2 } from "../assets"
import styles, {layout} from "../style"
import Button from './Button'

const Billing = () => (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={stock2} alt="billing" className="w-[400px] h-[400px] rounded-md relativr z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Audit
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Performing an audit of the existing branding and digital media strategy, the company goals, brand direction,
            competition, market dynamics, customer profi les and document review of existing reports
        </p>
        <Button styles="mt-10"/>
      </div>
    </section>
  )


export default Billing