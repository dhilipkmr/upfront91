import React, {useRef, forwardRef} from 'react';

const Speakers = ({ list = [], forwardedRef = null }) => {

  return (
    <div className="speakerWrap" ref={forwardedRef}>
      <div className="speakerHeading">Speakers</div>
      {
        list.map((speaker) => {
          const { name = '', topic = '', role = ''} = speaker;
          return (
            <div className="speaker">
              <div className="flex">
                <div className="avatarWrap width100-tab">
                  <img className="speakerImg" width="250px" height="250px" src="https://www.dhilipkmr.dev/static/profilePic-162001e6f25969e3061354534123fea9.png"/>
                </div>
                <div className="contentSpeaker speakerBg width100-tab">
                  <div className="margin10 topic">{topic}</div>
                  <div className="margin20 lightGrey">by</div>
                  <div className="margin10 lightGrey upperCase">{name}</div>
                  <div className=" lightGrey">{`( ${role} )`}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

const refForwarder = React.forwardRef((props, ref) => (
  <Speakers {...props} forwardedRef={ref}/>
));

export default refForwarder;