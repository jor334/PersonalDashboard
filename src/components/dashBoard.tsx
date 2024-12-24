import React from 'react';
import Cards from './cards';


export default function DashBoard(){
    return (
        <div className=" justify-items-center"> 
        
            <div className="grid grid-cols-2 gap-4 ">
                <Cards title='Spotify' description='last played songs!' image='src/assets/spotify-icon.svg' url='https://www.last.fm/user/JJor334'></Cards>
                <Cards title='Steam' description='descripcion steam' image='src/assets/steam-icon-logo.svg' url='https://steamcommunity.com/profiles/76561198359795971'></Cards>
                <Cards title='Portoflio (in progress)' description='web and mobile porfolio in progress!' image='src/assets/visual-studio-code-1.svg' url=''></Cards>
                <Cards title='github account' description='follow my github account!' image='src/assets/github-icon-2.svg' url='https://github.com/jor334'></Cards>  
                
            </div> 
        </div>
    );
    }

