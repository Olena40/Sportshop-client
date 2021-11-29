import React from "react";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    // <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container my-5">
      <footer class="bg-light text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div class="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              class="btn btn-outline-primary btn-floating m-1"
              style={{ backgroundcolor: " #3b5998" }}
              href="https://www.facebook.com/"
              role="button"
            >
              <i class="fab fa-facebook-f">
                {" "}
                <Icon.Facebook />
              </i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              class="btn btn btn-outline-info btn-floating m-1"
              style={{ backgroundcolor: "#55acee" }}
              href="https://twitter.com/"
              role="button"
            >
              <i class="fab fa-twitter">
                <Icon.Twitter />
              </i>
            </a>

            {/* <!-- Google --> */}
            <a
              class="btn btn btn-outline-danger btn-floating m-1"
              style={{ backgroundcolor: "#dd4b39" }}
              href="https://www.google.com/"
              role="button"
            >
              <i class="fab fa-google">
                <Icon.Google />
              </i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              class="btn btn btn-outline-info btn-floating m-1"
              style={{ backgroundcolor: "#ac2bac" }}
              href="https://www.instagram.com/"
              role="button"
            >
              <i class="fab fa-instagram">
                {" "}
                <Icon.Instagram />
              </i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              class="btn btn-outline-primary btn-floating m-1"
              style={{ backgroundcolor: "#0082ca" }}
              href="https://www.linkedin.com/"
              role="button"
            >
              <i class="fab fa-linkedin-in">
                <Icon.Linkedin />
              </i>
            </a>

            {/* <!-- YouTube --> */}
            <a
              class="btn btn-outline-danger btn-floating m-1"
              style={{ backgroundcolor: "#0082ca" }}
              href="https://www.youtube.com/"
              role="button"
            >
              <i class="fab fa-youtube">
                <Icon.Youtube />
              </i>
            </a>

            {/* <!-- Github --> */}
            <a
              class="btn btn-outline-dark btn-floating m-1"
              style={{ backgroundcolor: "#333333" }}
              href="https://github.com/"
              role="button"
            >
              <i class="fab fa-github">
                {" "}
                <Icon.Github />
              </i>
            </a>
          </section>
          {/* Section: Social media  */}
        </div>

        <div
          class="text-center "
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2); ", color: "black" }}
        >
          © {new Date().getFullYear()} Copyright.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
