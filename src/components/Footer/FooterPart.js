import logo from "../../Assets/Imgs/titanic-logo-3653E95B5B-seeklogo.com.png";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const FooterPart = () => {
  return (
    <>
      <div className={classes.FooterCont}>
        <a href="/">
          <img alt="Logo" src={logo} className={classes.logo} />
        </a>
        <div className={classes.FooterAdd}>
          <h6>Address</h6>
          {/* <p className={classes.footAdd}>
            Mir Mall Complex opposite
            <br /> District Police Lines Srinagar
          </p> */}
          <p className={classes.footAdd}>J&K 190001</p>
          <a className={classes.links} href="tel:9797979797">
            <FontAwesomeIcon
              icon={faPhone}
              beat
              style={{ fontSize: "14px", marginRight: "5px" }}
            />
            9797979797
          </a>
          <a className={classes.links} href="mailto:titanic_noreply@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              beat
              style={{ marginRight: "5px" }}
            />
            Northstar@gmail.com
          </a>
        </div>
        <div className={classes.FooterDet}>
          <h6>Links</h6>
          <a className={classes.links} href="privacy">
            Privacy Policy
          </a>
          <a className={classes.links} href="refund">
            Refund
          </a>
          <a className={classes.links} href="terms">
            Terms & Conditions
          </a>
          <a className={classes.links} href="about">
            About Us
          </a>
        </div>
      </div>
      <div className={classes.copy}>
        <p className={classes.footAdd}>
          &copy; Copyright All rights reserved Titanic Services
        </p>
        <a href="developer">
          Developers Link
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </div>
    </>
  );
};
export default FooterPart;
