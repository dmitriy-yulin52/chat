import React from 'react';
import { useFormik } from 'formik';
import styles from '../../App.module.css';
import * as Yup from 'yup';

export const FormAddMessage = React.memo(() => {

    const addMessageSchema = Yup.object().shape({
        'message': Yup.string().required('Required field')
    });

    const formAddMessage = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: addMessageSchema,
        onSubmit: (formData) => {
            formAddMessage.resetForm();
        }
    });

    const keyDownHandler = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            formAddMessage.submitForm();
        };
    };

    return (<form onSubmit={formAddMessage.handleSubmit} className={styles.formAddMessage}>
        <textarea
            className={styles.formAddMessage__textarea}
            rows={4}
            type={'text'}
            name={'message'}
            onChange={formAddMessage.handleChange}
            onKeyDown={keyDownHandler}
            value={formAddMessage.values.message}
            placeholder={'Enter your message.  For sending press Ctrl + Enter.'}
        />
            {formAddMessage.errors.message && <span className={styles.errorAddMessage}>
        {formAddMessage.errors.message}
        </span>}
            <button className={styles.formAddMessage__button} type={'submit'} >Send</button>
        </form>
    )
});