import React from 'react';
import './Invitation.css'
function Invitation(props) {
    return (
        <div className='invitation'>
            <div className='animate__animated animate__rotateInDownLeft'>
                <img style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '12px' }} width={350} height={260} src="/img/biathiep.png" />
            </div>
            <div className='d-flex justify-content-center my-3 animate__animated animate__rotateInDownRight'>
                <div className='content-invitation'>

                </div>
            </div>
        </div>
    );
}

export default Invitation;