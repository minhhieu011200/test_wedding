import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AudioSpeaker from "./component/AudioSpeaker";
import HeartFall from "./component/HeartFall";
import Invitation from "./component/Invitation";
import LazyLoadContent from "./component/LazyLoadContent";
import GalleryImage from "./component/GalleryImage";
import Greetings from "./component/Greetings";
import Donate from "./component/Donate";
import ThankYou from "./component/ThankYou";
import Introduce from "./component/Introduce";
import { ToastContainer } from "react-toastify";
// import * as Toastify from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const contentList = [
    {
      title: '',
      template: <Introduce />,
      className: 'introduce'
    },
    {
      title: 'Thư mời',
      template: <Invitation />,
    },
    {
      title: 'Album ảnh cưới',
      // template: <GalleryImage />,
      template: <div>Coming soon</div>,
    },
    {
      title: 'Video cưới',
      template: <div>Coming soon</div>,
    },
    {
      title: 'Thực đơn',
      template: <div>Coming soon</div>,
      // template: <Invitation />,
    },
    {
      title: 'Gửi lời chúc mừng',
      template: <Greetings />,
      className: 'greetings'
    },
    {
      title: 'Mừng cưới',
      template: <Donate />,
    },
    {
      title: '',
      template: <ThankYou />,
    },



  ];
  return (
    <>
      {contentList.map((content, index) => (
        <LazyLoadContent key={index} content={content} index={index + 1} />
      ))}
      <HeartFall snowflakeImage="/img/heart.jpg" />
      <ToastContainer position="bottom-right" theme="colored" autoClose={2000} />
      <AudioSpeaker />
    </>
  );
}

export default App;
