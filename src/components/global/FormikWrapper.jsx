import styled from "styled-components";
import PropTypes from "prop-types";
import { Formik } from "formik";

const FormWrapper = styled.form`
  width: stretch;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem;
  button[type="submit"] {
    margin-top: 2.4rem;
  }
  .spanFull {
    grid-column: 1/3;
  }
`;

const FormikWrapper = ({
  children,
  initialValues = {},
  schema = {},
  onSubmit = () => {},
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>{children}</FormWrapper>
      )}
    </Formik>
  );
};

FormikWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  initialValues: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormikWrapper;
