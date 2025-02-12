import React from 'react';
import './Invitation.css'
import { Image } from 'antd';
import { LiaHeartSolid } from "react-icons/lia";
import and from '../assets/img/and.png'
function Invitation(props) {
    return (
        <div className='invitation'>
            <div className='animate__animated animate__rotateInDownLeft' style={{ animationDelay: '1.5s' }}>
                <Image style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '12px' }} width={350} height={260} src="/img/biathiep.png" />
            </div>
            <div className='d-flex justify-content-center my-3 animate__animated animate__rotateInDownRight' style={{ animationDelay: '2s' }}>
                <div className='content-invitation p-3 text-red' style={{ fontFamily: 'Crimson Text, serif' }}>
                    <div className='animate__animated animate__fadeInUp' style={{ animationDelay: '3s' }}>
                        <img src='/img/logocuoi.png' width={100} height={75} />
                        <div className='d-flex justify-content-around mb-3'>
                            <div className='content-left'>
                                <p style={{ fontSize: '16px' }}>ÔNG BÀ</p>
                                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>BÙI THẾ VINH</p>
                                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>VÕ THỊ CHÍN</p>
                            </div>
                            <div className='content-right'>
                                <p style={{ fontSize: '16px' }}>ÔNG BÀ</p>
                                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>LÊ THÀNH PHƯỚC</p>
                                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>TRẦN THỊ PHƯƠNG</p>
                            </div>
                        </div>

                        <div className='my-2'>
                            <p style={{ fontWeight: '1000', fontSize: '22px' }}>TRÂN TRỌNG KÍNH MỜI</p>
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Bạn cùng gia đình</p>
                            <p className='mt-1' style={{ fontSize: '15px' }}>ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI</p>
                        </div>

                        <div className='text-red'>
                            <p style={{ fontFamily: 'Pinyon Script, serif', fontWeight: 'bold', fontSize: '36px' }}>Bùi Thế Minh Hiếu</p>
                            <img src={and} width={60} height={40} />
                            <p style={{ fontFamily: 'Pinyon Script, serif', fontWeight: 'bold', fontSize: '36px' }}>Lê Quỳnh Như</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation;