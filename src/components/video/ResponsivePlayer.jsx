import React from 'react';
import styled from 'styled-components';

const Player = styled.video`
    position:absolute;
    height:100%;
    width:100%;
`

export default function ResponsivePlayer() {
    return (
        
           <Player autoplay="true" controls>
               <source src="https://res.cloudinary.com/dalnnaod7/video/upload/v1588903050/Untitled_Project_Made_with_Clipchamp_ju6u2o.mp4"/>
           </Player>
        
    )
}
