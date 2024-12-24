import React from 'react';

export default function Footer() {
    return (
        <div className="grid grid-rows-2 justify-items-center m-5 ">
            <div className='flex space-x-20'>   
            <img src="src/assets/bits-8bits.gif" alt="Pixel Cat Playing" className="w-16 h-16" />
            <img src="src/assets/bits-8bits (1).gif" alt="Pixel Cat Playing" className="w-16 h-16" />
            </div>
            <div className="dark:bg-gray-800 dark:border-gray-700 border-gray-200 shadow bg-white border flex justify-evenly items-center rounded-lg max-w-6xl w-full mx-auto p-4">

                <a href="https://www.linkedin.com/in/juan-jose-ortiz-rouille/" className="text-white flex space-x-1">
                    <img src="src/assets/icons8-linkedin.svg" alt="linkedin" className="h-6 w-6" />
                    <p className='custom-font'>linkedin</p>
                </a>
                <a href="" className="text-white flex space-x-1">
                    <img src="src/assets/icon-email.svg" alt="contact me!" className="h-6 w-6" />
                    <p className='custom-font'>jjsrs334@gmail.com</p>
                    
                </a>
            </div>
        </div>
    );
}