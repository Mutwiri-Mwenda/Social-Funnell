import { stock4 } from "../assets"
import styles, {layout} from "../style"
import Button from './Button'

const Deploy = () => {
  return (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={stock4} alt="billing" className="w-[400px] h-[400px] relative z-[5] rounded-md" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Testing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
             Deploying the new strategy on a small scale, testing out assumptions, performing analysis of results, 
            generating a report and coming up with a final proposed approach.
        </p>
        <Button styles="mt-10"/>
      </div>
    </section>
  )
}

export default Deploy