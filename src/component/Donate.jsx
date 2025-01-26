import React from "react";
import { Button, Image, Typography } from 'antd';

const { Text } = Typography;

import './Donate.css'
import bankQRHieu from '../assets/img/bankQR_Hieu.jpg'
import bankQRNhu from '../assets/img/bankQR_Nhu.jpg'

export default function Donate() {
  const handleDownload = (img) => {
    const link = document.createElement('a');
    link.href = img; // Image URL
    link.download = `BankQR.jpg`; // Desired download name
    link.click();
  };

  return <div className="donate">

    <div className="content-donate animate__animated animate__lightSpeedInLeft">
      <div className="my-2">
        Mừng cưới chú rễ
      </div>
      <Image src={bankQRNhu} width={330} height={460} style={{ border: "1px solid rgb(222, 222, 222)", borderRadius: "12px" }} />
      <div className="mt-2">
        <Button color="purple" variant="outlined" onClick={() => handleDownload(bankQRNhu)}>Tải ảnh QR</Button>
        &nbsp;
        &nbsp;
        <Text copyable={{ text: '03365661701', icon: <Button color="purple" variant="dashed">Copy STK</Button> }} />
      </div>
    </div>


    <div className="my-3 content-donate animate__animated animate__lightSpeedInRight">
      <div className="my-2">
        Mừng cưới cô dâu
      </div>
      <Image src={bankQRHieu} width={330} height={460} style={{ border: "1px solid rgb(222, 222, 222)", borderRadius: "12px" }} />
      <div className="mt-2">

        <Button color="primary" variant="outlined" onClick={() => handleDownload(bankQRHieu)}>Tải ảnh QR</Button>
        &nbsp;
        &nbsp;
        <Text copyable={{ text: '100873594833', icon: <Button color="primary" variant="dashed">Copy STK</Button> }} />

      </div>
    </div>


  </div >;
}
