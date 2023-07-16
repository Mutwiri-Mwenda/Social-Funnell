import styles from './style';

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Audit, Deploy, Approach } from './components';

const App = () => (
    <div className='bg-cyan-200	 w-full max-width: 1536px'>
      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-cyan-200 ${styles.flexCenter} w-full max-width: 1536px`}>
        <div className={`${styles.boxWidth} text-black`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-cyan-200 ${styles.paddingX} ${styles.flexCenter} w-full max-width: 1536px`}>
      <div className={`${styles.boxWidth} text-black`}>
          <Stats/>
        </div>
      </div>
      <div className={`bg-neutral-100 ${styles.paddingX} ${styles.flexCenter} w-full max-width: 1536px`}>
      <div className={`${styles.boxWidth} text-black`}>
      <Business/>
        </div>
      </div>
      <div className={`bg-cyan-200 ${styles.paddingX} ${styles.flexCenter} w-full max-width: 1536px`}>
        <div className={`${styles.boxWidth}`}>
          <Approach/>
          <Billing/>
          <Audit/>
          <Deploy/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>

        </div>
      </div>
    </div>
  );

export default App