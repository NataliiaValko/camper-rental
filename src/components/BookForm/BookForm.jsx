import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";

export default function BookForm() {
  return (
    <>
      <Formik
        onSubmit={() => {
          window.location.reload();
        }}
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, "Your name is too short").required(),
          email: Yup.string().email("Put your real email pls!").required(),
          bookingDate: Yup.date().required(),
          comment: Yup.string(),
        })}
      >
        <Form className={css.bookFormContainer}>
          <div>
            <h3 className={css.bookFormTitle}>Book your campervan now</h3>
            <p className={css.bookFormText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={css.fieldContainer}>
            <label className={css.label} htmlFor="name">
              <Field
                className={css.field}
                name="name"
                type="text"
                placeholder="Name"
              />
            </label>
            <ErrorMessage name="name" component="div" />
            <label className={css.label} htmlFor="email">
              <Field
                className={css.field}
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <ErrorMessage name="email" component="div" />
            <label className={css.label} htmlFor="bookingDate">
              <Field
                className={css.field}
                name="bookingDate"
                type="date"
                placeholder="Booking Date"
              />
            </label>
            <ErrorMessage name="bookingDate" component="div" />
            <label className={css.label} htmlFor="comment">
              <Field
                className={css.fieldTextArea}
                as="textarea"
                name="comment"
                type="text"
                placeholder="Comment"
              />
            </label>
            <ErrorMessage name="comment" component="div" />
          </div>
          <button className={css.sendButton} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
