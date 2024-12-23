import React from 'react';

interface CardsProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function Cards({ title, description, image, url }: CardsProps) {
    return (
        <a href="https://flowbite.com/docs/components/card/" className="grid grid-cols-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-64 md:rounded-none md:rounded-s-lg" src={image} alt="" />
        </a>
    );
}
