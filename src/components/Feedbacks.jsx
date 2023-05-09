import React from 'react'
import { styles } from '../styles'
import { testimonials } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div>
    <p>"</p>
    <div>
      {testimonial}
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <div>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")