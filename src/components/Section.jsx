import React from 'react';
import styled from 'styled-components';

import Wave from './Wave';
import ResponsivePlayer from '../components/video/ResponsivePlayer';


const SectionGroup = styled.div`
    display: grid;
    grid-template-columns: 600px 600px;
    grid-gap: 20px;
    background: url(${props => props.image});
    height: 780px;
    background-size: cover;
    position: relative;
    justify-content: center;
    align-content: center;
    
`
const SectionCard = styled.div`
    display: grid;
    justify-content: center;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    // margin: 0 50px;
    line-height: 1.2;
`
const SectionText = styled.p`
    color: white; 
    font-size: 22px;
    font-weight: 500;
    opacity: 0.9;
    line-height: 1.5;
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
 
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`
const Test = styled.div`
    width: 200px;
    height: 200px;
    border: 2pc solid green;
`

const Section = props => (
    <>
        <SectionGroup image={props.image}>
            <WaveTop>
                <Wave />
            </WaveTop>
            <WaveBottom>
                <Wave />
            </WaveBottom>       
                <SectionTitle>
                    {props.title}
                    <SectionText>
                    {props.text}
                </SectionText>
                </SectionTitle>  
               
            <SectionCard>
                    <div className="player">
                        <ResponsivePlayer />
                    </div>
                </SectionCard>
        </SectionGroup>
    </>
)
export default Section;