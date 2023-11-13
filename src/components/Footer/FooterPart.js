import logo from "../../Assets/Imgs/titanic-logo-3653E95B5B-seeklogo.com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const FooterPart = () => {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <>
      <footer class="bg-white relative">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="text-teal-600">
                <img src={logo} alt="logo" className="w-24 h-14" />
              </div>

              <p class="mt-4 max-w-xs text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>

              <ul class="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div className="tracking-wider">
                <p class="font-bold text-gray-900">Services</p>

                <ul class="mt-6 space-y-4 text-md">
                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tracking-wider">
                <p class="font-bold text-gray-900">Company</p>

                <ul class="mt-6 space-y-4 text-md">
                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tracking-wider">
                <p class="font-bold text-gray-900">Helpful Links</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tracking-wider">
                <p class="font-bold text-gray-900">Legal</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="absolute right-2 p-2 w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
          />
        </span>
      </footer>

      <div className="bg-green-700 py-4 text-white text-center tracking-wider">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} Titanic Services. All rights
          reserved.
        </p>
        <a
          href="developer"
          className="flex items-center justify-center text-lg"
        >
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} className="m-1 text-red-500" /> by
          Developers
        </a>
      </div>
    </>
  );
};

export default FooterPart;
