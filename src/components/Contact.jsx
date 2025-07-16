import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import emailjs from 'emailjs-com'

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setSubmitStatus(null);
        emailjs.sendForm(
            'service_lup1dk2',
            'template_xp171tl',
             e.target,
            'TBioP4lrm0OEPIyLU',
        ).then(() => {
            setSubmitStatus('success');
            setFormData({ fullName: '', email: '', message: '' });
            e.target.reset();
        }).catch(() => {
            setSubmitStatus('error');
        }).finally(() => {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        });
    };

  return (
    <div id="contact" className='text-white pt-16'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-center mb-4 underline underline-offset-8 decoration-green-500'>
          Contact me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-400"
        >
          Feel free to reach out!
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-green-500 p-4 rounded-full">
              <FaPhone className="text-black w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-green-500">Call me</p>
              <p className="text-white">+1 551-328-1839</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-green-500 p-4 rounded-full">
              <FaEnvelope className="text-black w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-green-500">Email</p>
              <p className="text-white">kalyanpapani133@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-green-500 p-4 rounded-full">
              <FaMapMarkerAlt className="text-black w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-green-500">Address</p>
              <p className="text-white">9 Gifford Ave, Jersey City, NJ 07304</p>
            </div>
          </motion.div>
        </div>

        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="space-y-4 text-white">
            <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            >
            
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`border-2 bg-gray-900 p-4 rounded-md w-full ${errors.fullName ? 'border-red-500' : 'border-green-500'}`}
                    required
                />
                {errors.fullName && (<p className="text-red-400 text-sm mt-1">{errors.fullName}</p>)}
                </div>
                <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`border-2 bg-gray-900 p-4 rounded-md w-full ${errors.email ? 'border-red-500' : 'border-green-500'}`}
                    required
                />
                {errors.email && (<p className="text-red-400 text-sm mt-1">{errors.email}</p>)}
                </div>
            </div>
            <div>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`border-2 bg-gray-900 p-4 rounded-md w-full h-32 mt-4 ${
                    errors.message ? 'border-red-500' : 'border-green-500'
                }`}
                />
                {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
            </div>

            <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-full mt-4 transition duration-200 ${
                isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 text-black'
                }`}
            >
                {isSubmitting ? (
                <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                </span>
                ) : (
                'Send Message'
                )}
            </motion.button>

            {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-2">Message sent!</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-2">Error sending message</p>
            )}
            </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-gray-900 text-white py-8 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-md">© 2025 Kalyan Papani. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://x.com/kalyanpapani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-200"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalyan-papani-44099b1a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-200"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/kalyan_papani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-200"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/KalyanPapani64"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-200"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
