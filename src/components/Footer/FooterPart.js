import logo from "../../Assets/Imgs/titanic-logo-3653E95B5B-seeklogo.com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
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
                Where Quality meets Excellence
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
              <div className="tracking-wider col-span-2">
                <p class="font-bold text-gray-900">Address</p>

                <ul class="mt-6 space-y-4 text-md">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <a
                      href="https://www.google.com/maps/place/Sgr+1900010,+1308,+Balgarden+-+Nursing+garh+Rd,+opp.+Ahmdiya+Masjid,+Balgarden,+Srinagar,+190010/@34.0765485,74.7975163,150m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x38e18f1f566a0147:0x6fbb5a7a3a6f8d00!2sDigital+Solution+Kashmir!8m2!3d34.0765907!4d74.7981887!16s%2Fg%2F11p67x_f14!3m5!1s0x38e18f3917e8b0c1:0x1667f2dfc6ddde85!8m2!3d34.0765474!4d74.79816!16s%2Fg%2F11r8h6g4zk!5m1!1e1?entry=ttu"
                      target="_blank"
                      rel="noreferrer"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Mir Mall opposite District Police Lines
                      <br />
                      Balgarden Karannagar Srinagar J&K
                    </a>
                  </li>

                  <li>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-2 text-green-700"
                      beat
                    />
                    <a
                      href="tel:9419421934"
                      class="text-green-700 transition hover:opacity-75 font-semibold"
                    >
                      9419421934
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-2 text-green-700"
                      beat
                    />
                    <a
                      href="tel:7006701866"
                      class="text-green-700 transition hover:opacity-75 font-semibold"
                    >
                      7006701866
                    </a>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" beat />{" "}
                    <a
                      href="mailto:titanicservicessgr@gmail.com"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      titanicservicessgr@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tracking-wider">
                <p class="font-bold text-gray-900">Helpful Links</p>

                <ul class="mt-6 space-y-4 text-md">
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

                <ul class="mt-6 space-y-4 text-md">
                  <li>
                    <a
                      href="/shipping"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Shipping Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/return"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Return Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/refund"
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
