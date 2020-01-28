import React, {forwardRef} from 'react';
import { FaMeetup, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = ({ forwardedRef }) => {

  return (
    <div className="followWrap"ref={forwardedRef}>
      <div className="followTopic">Follow Us</div>
      <span className="icons"><FaTwitter/></span>
      <span className="icons" ><FaMeetup/></span>
      <span className="icons"><FaInstagram/></span>
    </div>
  );
}

const refForwarder = React.forwardRef((props, ref) => (
  <ContactUs {...props} forwardedRef={ref}/>
));

export default refForwarder;