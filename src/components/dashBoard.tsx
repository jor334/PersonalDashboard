import React from 'react';
import Cards from './cards';


export default function DashBoard(){
    return (
        <div className=" justify-items-center"> 
        
            <div className="grid grid-cols-2 gap-4 ">
                <Cards title='Spotify' description='descripcion spotify' image='src/assets/spotify-icon.svg' url='https://flowbite.com/docs/components/card/'></Cards>
                <Cards title='Steam' description='descripcion steam' image='src/assets/spotify-icon.svg' url='https://flowbite.com/docs/components/card/'></Cards>
                <Cards title='Portoflio (in progress)' description='descripcion portfolio' image='src/assets/spotify-icon.svg' url='https://flowbite.com/docs/components/card/'></Cards>
                <Cards title='github account' description='descripcion github' image='src/assets/spotify-icon.svg' url='https://flowbite.com/docs/components/card/'></Cards>  
                
            </div>

        
        </div>
        
        
    );
    }

