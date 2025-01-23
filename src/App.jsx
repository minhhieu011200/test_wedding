import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AudioSpeaker from "./component/AudioSpeaker";
import HeartFall from "./component/HeartFall";
import Invitation from "./component/Invitation";
import LazyLoadContent from "./component/LazyLoadContent";
import CountDownTimer from "./component/CountDownTimer";
import GalleryImage from "./component/GalleryImage";
import Greetings from "./component/Greetings";
import Donate from "./component/Donate";
import ThankYou from "./component/ThankYou";

function App() {
  const contentList = [
    <CountDownTimer />,
    <Invitation />,
    <GalleryImage />,
    <Greetings />,
    <Donate />,
    <ThankYou />,
  ];
  return (
    <>
      {contentList.map((content, index) => (
        <LazyLoadContent key={index} content={content} index={index + 1} />
      ))}
      {/* <HeartFall snowflakeImage="/img/heart.jpg" /> */}

      <AudioSpeaker />
    </>
  );
}

export default App;
