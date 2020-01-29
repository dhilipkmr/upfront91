import React, {forwardRef} from 'react';
import { FaMeetup, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = ({ forwardedRef }) => {

  return (
    <div className="followWrap"ref={forwardedRef}>
      <div className="followTopic">Follow Us</div>
      <span className="icons">
        <a href="/" target="_blank">
          <FaTwitter style={{ color: "#fff"}}/>
        </a>
      </span>
      <span className="icons" >
        <a href="/" target="_blank">
          <FaMeetup style={{ color: "#fff"}}/>
        </a>
      </span>
      <span className="icons">
        <a href="/" target="_blank">
          <FaInstagram style={{ color: "#fff"}}/>
        </a>
      </span>
    </div>
  );
}

const refForwarder = React.forwardRef((props, ref) => (
  <ContactUs {...props} forwardedRef={ref}/>
));

export default refForwarder;