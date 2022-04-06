import Navbar from "../components/global/Navbar";
import Sidebar from "../components/global/Sidebar";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";
import FormGroup from "../components/global/FormGroup";
import Spacer from "../components/global/Spacer";
import { Formik } from "formik";
import * as Yup from "yup";
import { signUpUser, signInUser } from "../apis";
import Button from "../components/global/Button";
import Loader from "../components/global/Loader";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  .content {
    display: flex;
    background: #ffffff;
  }
  .sidebar {
    width: 30%;
    height: 100%;
    border-right: 1px solid #c4c4c4;
  }
  .container {
    width: 50%;
    margin: 0rem 10rem;
    height: 1000px;
  }
  .mainContent {
    margin: auto;
    padding-top: 3rem;
    padding: 6rem;
    border-radius: 16px;
    position: relative;
    top: 2rem;
  }
  @media screen and (max-width: 768px) {
    .sidebar {
      width: 35%;
    }
    .container {
      width: 55%;
      height: 100%;
      margin: 9rem 2rem;
    }
    .mainContent {
      width: 100%;
      height: 100%;
      padding: 2rem;
      border-radius: 16px;
      position: static;
    }
  }
  @media screen and (max-width: 500px) {
    .sidebar {
      width: 45%;
    }
    .container {
      width: 95%;
    }
  }
`;
const FormWrapper = styled.form`
  .spanFull {
    width: 30%;
  }
  .button {
    font-weight: 500;
    font-size: 26px;
    line-height: 42px;
    border-radius: 16px;
  }
  @media screen and (max-width: 768px) {
    .button {
      margin: auto;
      border-radius: 10px !important;
      height: 3rem;
      width: 21rem;
    }
    .formField {
      width: 6rem;
    }
  }
  @media screen and (max-width: 500px) {
    .button {
      height: 3rem;
      width: 18rem;
    }
  }
`;

const Dashboard = (props) => {
  const router = useHistory();
  const isMounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const { logged_in, setLogged_in } = props;

  const value = queryString.parse(window.location.search);
  const page = value.page;

  const schema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Field required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Field required"),
  });

  const handleSignIn = async (body) => {
    setLoading(true);
    //body = { ...body };
    const res = await signInUser(body);
    setLoading(false);
    setLogged_in(true);
    router.push("/posts");
  };
  const handleSignUp = async (body) => {
    setLoading(true);
    await signUpUser(body);
    setLoading(false);
    setLogged_in(true);
    window.location = "../verify?page=sign_in";
    //router.push("/verify?page=sign_in");
  };
  useEffect(() => {
    page === "sign_in" ? setName("Login") : setName("Register");
  }, []);
  return (
    <Wrapper className="flexRow">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="container flexColumn alignCenter">
        <div className="mainContent bgWhite">
          <h1 className="textCenter">{name}</h1>
          <Spacer y={2.6} />
          {/* Personal account */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
              isMounted.current = true;
              setSubmitting(true);
              (await page) === "sign_in"
                ? handleSignIn(values)
                : handleSignUp(values);
              return () => {
                isMounted.current = false;
                if (!isMounted.current) {
                  setSubmitting(false);
                }
              };
            }}
          >
            {({ handleSubmit, isSubmitting, isValid, values }) => (
              <FormWrapper onSubmit={handleSubmit}>
                <FormGroup
                  fieldStyle="shortText"
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  noborder="no"
                  className="formField"
                />
                <Spacer y={2} />
                <FormGroup
                  fieldStyle="shortText"
                  type="password"
                  placeholder="Password"
                  name="password"
                  noborder="no"
                  className="password formField"
                />
                <Spacer y={3.6} />
                {isSubmitting ? (
                  <Loader className="spanFull" />
                ) : (
                  <Button
                    type="submit"
                    text={loading ? `Please wait......` : name}
                    height="5rem"
                    width="20.5rem"
                    bghover="#e65a37"
                    bg="#EA7052"
                    className="button"
                    disabled={!isValid || !values.email || !values.password}
                    fullWidth
                  />
                )}
              </FormWrapper>
            )}
          </Formik>
          <Spacer y={3.6} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
