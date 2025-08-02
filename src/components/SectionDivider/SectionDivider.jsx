import React, { useState, useEffect } from 'react'
import './SectionDivider.css'
import { motion} from 'framer-motion';
const SectionDivider = () => {

  const transition = {type: 'tween', duration: 5}
  const mobile = window.innerWidth<=768 ? true: false

  return (
    <section className="section-divider">
      <motion.div className="dot"
        initial={{left: '10px'}}
        whileInView={{ left: mobile ? '30%' : '40%' }}
        transition={transition}
      ></motion.div>
      <span>Our Collections and Bouquets</span>
    </section>
  )
}

export default SectionDivider