import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true);
            document.body.style.overflow = '';
        }, 4500);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 min-vw-100 min-vh-100 bg-black position-fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className=' d-flex align-items-center justify-content-center vh-100'>
                    <div className=' flex-column d-flex justify-content-center sm576:gap-[20px] align-items-center '>
                        <h1 className=' fs-3lg fw-bold font-gradient'>
                           KodeDen
                        </h1>
                        <div className="loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader