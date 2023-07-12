import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { slideIn } from '../utils/motion';




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => { }
  const handleSubmit = (e) => { }
  return (
    <div className='flex flex-col-reverse gap-10 overflow-auto xl:mt-12 xl:flex-row'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 rounded-2xl p-8'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
          <label htmlFor="" className='flex flex-col'>
            <span className='font-medium text-white mb04'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name" className='px-6 py-4 font-medium text-white border-2 rounded-lg bg-tertiary placeholder:text-secondary outlined-none' />
          </label>

          <label htmlFor="" className='flex flex-col'>
            <span className='font-medium text-white mb04'>Your Email</span>
            <input type="text" name='email' value={form.email} onChange={handleChange} placeholder="What's your email" className='px-6 py-4 font-medium text-white border-2 rounded-lg bg-tertiary placeholder:text-secondary outlined-none' />
          </label>

          <label htmlFor="" className='flex flex-col'>
            <span className='font-medium text-white mb04'>Your message</span>
            <textarea rows="7" type="text" name='message' value={form.message} onChange={handleChange} placeholder="What's your message" className='px-6 py-4 font-medium text-white border-2 rounded-lg bg-tertiary placeholder:text-secondary outlined-none' />
          </label>

          <button type='submit' className='px-8 py-3 font-bold text-white shadow-md outline-none rounded-xl shadow-primary bg-tertiary w-fit'>{loading ? 'Sending...' : 'Send'}</button>
          <div className=''></div>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")