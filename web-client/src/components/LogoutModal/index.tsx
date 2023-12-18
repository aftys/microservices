import React, { useState } from 'react';
import { Modal } from 'antd';
import { RiLogoutCircleRLine } from 'react-icons/ri'

import { useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';


interface Props {
    isSidebarOpen: boolean;
}

const LougoutModal: React.FC<Props> = ({ isSidebarOpen }) => {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();
    const {setAuth}=useAuth();
    const logout = () => {
        setAuth(null);
        navigate('/login');
    };

    

    return (
        <>
            <div className='absolute bottom-5 flex   rounded-xl py-5 pl-4 h-7  cursor-pointer dark:bg-blue-900 bg-[#22d3ee] dark:text-gray-300 text-gray-100 text-sm items-center gap-x-4 w-full ' onClick={() => setOpen(true)}>
                <RiLogoutCircleRLine />
                <span className={`${!isSidebarOpen && "hidden"} origin-left duration-400`}>
                    Logout
                </span>
            </div>
            <Modal
                title="Sign out Confirmation"
                centered
                open={open}
                onOk={() => {
                    logout()
                    setOpen(false)

                }
                }
                onCancel={() => setOpen(false)}
                width={300}
                
                okButtonProps={{
                                type: 'default'
                            }}
            >
                <p>vous êtes sûr de se deconnecter de votre compte</p>
            </Modal>
        </>
    );
}

export default LougoutModal;