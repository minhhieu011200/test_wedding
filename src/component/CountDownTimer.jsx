import React from "react";
import Countdown from "react-countdown";
import { CiHeart } from "react-icons/ci";
import './CountDownTimer.css'
import { HeartOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
export default function CountDownTimer() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <>fdsfdsjkfh</>;
    } else {
      // Render a countdown
      return (
        <div className="count-down-heart d-flex justify-content-center">
          <div className="content-count-down-heart">
            <CiHeart size={100} color='rgb(225, 79, 79)' opacity={0.8} />
            <div className="inside-heart">
              <p>
                {days}
              </p>
              <p>
                Ngày
              </p>
            </div>
          </div>
          <div className="content-count-down-heart">
            <CiHeart size={100} color='rgb(225, 79, 79)' opacity={0.8} />
            <div className="inside-heart">
              <p>
                {hours}
              </p>
              <p>
                Giờ
              </p>
            </div>
          </div>
          <div className="content-count-down-heart">
            <CiHeart size={100} color='rgb(225, 79, 79)' opacity={0.8} />
            <div className="inside-heart">
              <p>
                {minutes}
              </p>
              <p>
                Phút
              </p>
            </div>
          </div>
          <div className="content-count-down-heart">
            <CiHeart size={100} color='rgb(225, 79, 79)' opacity={0.8} />
            <div className="inside-heart">
              <p>
                {seconds}
              </p>
              <p>
                Giây
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <Countdown date={new Date("2025-03-23T11:00:00")} renderer={renderer} />
  );
}
