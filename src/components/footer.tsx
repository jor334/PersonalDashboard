import React from 'react';

export default function Footer() {
    return (
        <div className="dark:bg-gray-800 dark:border-gray-700 border-gray-200 shadow bg-white border h-14 m-4 fixed bottom-0 left-0 right-0 flex justify-evenly items-center rounded-lg max-w-6xl mx-auto">
            <a href="https://www.linkedin.com/in/juan-jose-ortiz-rouille/" className="text-white flex space-x-1">
                <img src="src/assets/icons8-linkedin.svg" alt="linkedin" className="h-6 w-6" />
                <p>linkedin</p>
            </a>
            <a href="" className="text-white flex space-x-1">
                <img src="src/assets/icon-email.svg" alt="contact me!" className="h-6 w-6" />
                <p>jjsrs334@gmail.com</p>
            </a>
            
            
        </div>
    );



    
}