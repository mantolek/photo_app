import styled, { keyframes } from 'styled-components';

const leftGo = keyframes`
    0% {
        transform: translateX(0%);
    } 20% {
        transform: translateX(30%) rotate(-20deg);
    } 40% { 
        transform: translateX(-40%) rotate(-50deg)
    } 60% {
        transform: translateX(-70%) rotate(20deg);
    } 100% {
        transform: translateX(-100%);
        border-radius: 50%;
    }
    `
    
    const leftBack = keyframes`    
    0% {
        transform: translateX(-100%) rotate(0deg);
        border-radius: 50%;
    } 5% {
        transform: translateX(-95%) rotate(5deg);
    } 10% {
        transform: translateX(-90%) rotate(-5deg);
    } 15% {
        transform: translateX(-85%) rotate(5deg);
    } 20% {
        transform: translateX(-80%) rotate(-5deg);
    } 25% {
        transform: translateX(-75%) rotate(5deg);
    } 30% {
        transform: translateX(-70%) rotate(-5deg);
    } 35% {
        transform: translateX(-65%) rotate(5deg);
    } 40% {
        transform: translateX(-60%) rotate(-5deg);
    } 45% {
        transform: translateX(-55%) rotate(5deg); 
    } 50% {
        transform: translateX(-50%) rotate(-5deg);
    } 55% {
        transform: translateX(-45%) rotate(5deg);
    } 60% {
        transform: translateX(-40%) rotate(-5deg);
    } 65% { 
        transform: translateX(-35%) rotate(5deg);
        border-radius: 30%;
    } 70% {
        transform: translateX(-30%) rotate(-5deg);
    } 75% {
        transform: translateX(-25%) rotate(5deg);
    } 80% {
        transform: translateX(-20%) rotate(-5deg);
    } 85% {
        transform: translateX(-15%) rotate(5deg);
    } 90% {
        transform: translateX(-10%) rotate(-5deg);
    } 95% {
        transform: translateX(-5%) rotate(5deg);
        border-radius: 10%;
    } 100% {
        transform: translateX(0%) rotate(0deg);
        border-radius: 0%;
    }
    `
    
    const rightGo = keyframes`
    0% {
        transform: translateX(0%);
    } 20% {
        transform: translateX(-30%) rotate(20deg);
    } 40% { 
        transform: translateX(40%) rotate(50deg);
    } 60% {
        transform: translateX(70%) rotate(-20deg);
    } 100% {
        transform: translateX(100%);
        border-radius: 50%;
    }
    `
    
const rightBack = keyframes`
    0% {
        transform: translateX(100%);
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    } 40% {
        transform: translateX(0%);
    } 60% {
        transform: translateX(15%);
        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
    } 80% {
        transform: translateX(0%);
    } 90% {
        transform: translateX(7%);
        border-top-left-radius: 5%;
        border-bottom-left-radius: 5%;
    } 100% {
        transform: translateX(0%);
    }
`

const fromTop = keyframes`
    0% {
        width: 0;
        opacity: 0;
    } 90% {
        width: 0;
        opacity: 0;
    } 100% {
        transform: translateX(-5rem);
        width: 2rem;
        opacity: 1;
    } 
`

const disappear = keyframes`
    100% {
        width: 0rem;
    }
`

export const REGISTER_CONTAINER = styled.div<{move: boolean, disappear: boolean}>`
    width: 50vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorDark};
    transition: 1s all;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;

    display: ${({disappear}) => disappear ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    animation: ${({move}) => move ? leftGo : leftBack } 1.4s forwards;
`;

export const LOGIN_CONTAINER = styled.div<{disappear: boolean, move: boolean}>`
    width: 50vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorBright};;
    transition: 1s all;
    z-index: 9;
    position: absolute;
    top: 0;
    right: 0;

    display: ${({disappear}) => disappear ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    animation: ${({move}) => move ? rightGo : rightBack } 1.4s forwards;
`;

export const CLIP = styled.div<{move: boolean}>`
    right: 0;
    height: 100vh;
    
    div {
        height: .5rem;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.colorDark};
        position: absolute;
        right: -6rem;
        z-index: 20; 
        animation: ${({move}) => !move ? fromTop : disappear} forwards;

        &::before {
            content: "";
            top: 0;
            left: 0;
            border-top-left-radius: .8rem;
            border-bottom-left-radius: .8rem;
            background-color: ${({ theme }) => theme.colorBright};;
            height .5rem;
            width: 1rem;
            position: absolute;
            display: ${({move}) => move && 'none'};
        }
    }
    
    div:nth-child(1){
        top: 2rem;
        animation-duration: 1.7s;
    }
    div:nth-child(2){
        top: 5rem;
            animation-duration: 1.8s;
    }
    div:nth-child(3){
        top: 6rem;
            animation-duration: 1.9s;
    }
    div:nth-child(4){
        top: 9rem;
            animation-duration: 2s;
    }
    div:nth-child(5){
        top: 12rem;
            animation-duration: 2.1s;
    }
    div:nth-child(6){
        top: 16rem;
            animation-duration: 2.2s;
    }
    div:nth-child(7){
        top: 18rem;
            animation-duration: 2.3s;
    }
    div:nth-child(8){
        top: 21rem;
            animation-duration: 2.4s;
    }
    div:nth-child(9){
        top: 23rem;
            animation-duration: 2.5s;
    }
    div:nth-child(10){
        top: 26rem;
            animation-duration: 2.6s;
    }
`