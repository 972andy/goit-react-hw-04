import { Form, Formik, Field, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast'; 
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const INITIAL_VALUES = {
    searchTerm: "", 
  };

  const handleSubmit = (values, actions) => {
    
    if (!values.searchTerm.trim()) {
      toast.error('Будь ласка, введіть текст для пошуку зображень.'); 
      actions.setSubmitting(false); 
      return;
    }

    onSearch(values.searchTerm);
    actions.resetForm(); 
  };

  return (
      <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}> 
        <div className={style.formInputFieldContainer}>
          <label className={style.formLabel}>
            <Field className={`${style.formInput} ${style.inputField}`} type='text' name='searchTerm' />
            <ErrorMessage name="searchTerm" component="span" />
          </label>
        </div>
        <button className={`${style.button} ${style.submitButton}`} type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default SearchBar;

