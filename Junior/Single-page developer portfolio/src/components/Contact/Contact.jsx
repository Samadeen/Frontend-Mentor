import Button from '../../layout/Button/Button';
import Footer from '../../layout/Footer/Footer';
import styles from './Contact.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  //form states
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  //form validation
  ValidationSchema: Yup.object({
    name: Yup.string()
      .max(20, 'Name must be at least 20 characters')
      .required('Psst!... Kindly enter your beautiful name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Sorry, Invalid format here'),
    message: Yup.string().required('Common type in that message 😉'),
  });

  return (
    <>
      <div className={styles.contact_container}>
        <div className={`${styles.contact_wrapper} mw`}>
          <div className={styles.contact_details}>
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className={styles.contact_form}>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.fields}>
                <label htmlFor='name'>
                  <input
                    type='text'
                    name='name'
                    className={styles.name}
                    placeholder='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete='off'
                  />
                </label>
                <label htmlFor='email'>
                  <input
                    type='email'
                    name='email'
                    className={styles.name}
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete='off'
                  />
                </label>
                <label htmlFor='message'>
                  <input
                    type='text'
                    name='message'
                    className={styles.name}
                    placeholder='Message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete='off'
                  />
                </label>
              </div>
              <div className={styles.send}>
                <Button linkText='Send Message' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
