import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Store data in local storage
    const userData = { username, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to the home page
    navigate("/");
  };

  return (
    <section className="log-in">
      <div className="container">
        <div className="login-container mx-5 mt-5 bg-light p-5 text-center">
          <Navbar.Brand href="#" className="fs-2 ">
            <svg
              width="103"
              height="28"
              viewBox="0 0 103 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_387_77)">
                <path
                  d="M2.35499 26V4.104H11.535C14.8217 4.104 17.2923 4.954 18.947 6.654C20.6243 8.33133 21.463 11.1647 21.463 15.154C21.463 18.9167 20.6357 21.6707 18.981 23.416C17.349 25.1387 14.867 26 11.535 26H2.35499ZM6.94499 22.464H10.889C12.181 22.464 13.269 22.2713 14.153 21.886C15.037 21.478 15.6943 20.7527 16.125 19.71C16.5783 18.6447 16.805 17.126 16.805 15.154C16.805 13.182 16.601 11.6747 16.193 10.632C15.785 9.58933 15.1503 8.87533 14.289 8.49C13.4277 8.10467 12.2943 7.912 10.889 7.912H6.94499V22.464ZM30.6175 26.34C28.6908 26.34 27.1835 25.8073 26.0955 24.742C25.0302 23.654 24.4975 22.0673 24.4975 19.982V9.884H29.0875V19.88C29.0875 20.968 29.3482 21.7613 29.8695 22.26C30.3908 22.736 31.1728 22.974 32.2155 22.974C33.0088 22.974 33.7342 22.8153 34.3915 22.498C35.0715 22.1807 35.6495 21.784 36.1255 21.308V9.884H40.7155V26H36.4655L36.2955 24.47C35.6155 25.014 34.8108 25.4673 33.8815 25.83C32.9748 26.17 31.8868 26.34 30.6175 26.34ZM50.3006 26.34C49.0992 26.34 47.9546 26.2493 46.8666 26.068C45.7786 25.9093 44.9059 25.7053 44.2486 25.456V21.648C45.0419 21.9653 45.9372 22.2147 46.9346 22.396C47.9319 22.5547 48.8499 22.634 49.6886 22.634C50.8219 22.634 51.6152 22.566 52.0686 22.43C52.5446 22.294 52.7826 21.988 52.7826 21.512C52.7826 20.968 52.4199 20.5713 51.6946 20.322C50.9919 20.0727 49.9379 19.7213 48.5326 19.268C47.0592 18.7693 45.9259 18.1687 45.1326 17.466C44.3392 16.7633 43.9426 15.7207 43.9426 14.338C43.9426 12.7967 44.4979 11.618 45.6086 10.802C46.7419 9.96333 48.5552 9.544 51.0486 9.544C52.0459 9.544 52.9866 9.62333 53.8706 9.782C54.7546 9.918 55.5026 10.088 56.1146 10.292V14.066C55.5026 13.7713 54.7999 13.556 54.0066 13.42C53.2132 13.2613 52.4766 13.182 51.7966 13.182C50.8219 13.182 50.0399 13.25 49.4506 13.386C48.8839 13.522 48.6006 13.8167 48.6006 14.27C48.6006 14.7687 48.9066 15.12 49.5186 15.324C50.1532 15.528 51.1279 15.834 52.4426 16.242C53.7346 16.6273 54.7432 17.0467 55.4686 17.5C56.1939 17.9533 56.7039 18.4973 56.9986 19.132C57.2932 19.744 57.4406 20.5147 57.4406 21.444C57.4406 24.708 55.0606 26.34 50.3006 26.34ZM66.5204 26.34C64.6618 26.34 63.2791 25.8527 62.3724 24.878C61.4884 23.9033 61.0464 22.5773 61.0464 20.9V13.42H58.7684V9.884H61.0464V6.416L65.6364 5.056V9.884H69.7164L69.4444 13.42H65.6364V20.594C65.6364 21.478 65.8404 22.09 66.2484 22.43C66.6564 22.7473 67.2911 22.906 68.1524 22.906C68.7871 22.906 69.4444 22.7927 70.1244 22.566V25.728C69.6258 25.932 69.0818 26.0793 68.4924 26.17C67.9031 26.2833 67.2458 26.34 66.5204 26.34ZM72.48 26V9.884H76.73L76.934 11.55C77.6593 11.0967 78.5547 10.6887 79.62 10.326C80.708 9.94067 81.7733 9.68 82.816 9.544V13.012C82.204 13.1027 81.5353 13.2387 80.81 13.42C80.0847 13.6013 79.3933 13.8053 78.736 14.032C78.0787 14.2587 77.5233 14.4967 77.07 14.746V26H72.48ZM92.5575 26.34C89.5429 26.34 87.3329 25.6147 85.9275 24.164C84.5222 22.6907 83.8195 20.6167 83.8195 17.942C83.8195 15.2673 84.5222 13.2047 85.9275 11.754C87.3555 10.2807 89.5655 9.544 92.5575 9.544C95.5722 9.544 97.7822 10.2807 99.1875 11.754C100.616 13.2047 101.33 15.2673 101.33 17.942C101.33 20.6167 100.627 22.6907 99.2215 24.164C97.8162 25.6147 95.5949 26.34 92.5575 26.34ZM92.5575 22.43C94.0309 22.43 95.0849 22.1013 95.7195 21.444C96.3542 20.764 96.6715 19.5967 96.6715 17.942C96.6715 16.2873 96.3542 15.1313 95.7195 14.474C95.0849 13.794 94.0309 13.454 92.5575 13.454C91.1069 13.454 90.0642 13.794 89.4295 14.474C88.7949 15.1313 88.4775 16.2873 88.4775 17.942C88.4775 19.5967 88.7949 20.764 89.4295 21.444C90.0642 22.1013 91.1069 22.43 92.5575 22.43Z"
                  fill="#16213E"
                />
                <rect
                  x="56"
                  y="8"
                  width="32"
                  height="3"
                  transform="rotate(-180 56 8)"
                  fill="#D2153D"
                />
                <rect x="92" y="5" width="9" height="3" fill="#001ED3" />
              </g>
              <defs>
                <clipPath id="clip0_387_77">
                  <rect width="103" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Navbar.Brand>
          <form onSubmit={handleSubmit} className="text-start">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="repassword" className="form-label">
                Confirmation Password
              </label>
              <input
                type="password"
                className="form-control"
                id="repassword"
                name="repassword"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe"> Remember me</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign Up
            </button>
          </form>
          <div className="text-center mt-3">
            <article>
              Already have an account?{" "}
              <a className="text-primary  rounded p-1" href="/login">
                Sign In
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
