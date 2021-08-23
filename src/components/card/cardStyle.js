import styled from 'styled-components';

export const CardBody = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;

   margin: 15px;
   width: 250px;
   height: 300px;
   border-radius: 20px;
   text-align: center;

   background-color: var(--gray);
   box-shadow: 0 0 10px rgba(0,0,0, 0.8);

   .cardImage{
        max-width:100%;
        max-height:100%;
    }

   .cardImage img {
        width: 100%;
        height: 168px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .cardImage span{
        position: absolute;
        text-align: center;
        height: 56%;
        width: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        line-height: 10;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #1d1b1b;
        color: var(--purple);
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .cardImage span:hover{
        opacity: 0.8;
    }



   .title{
       color: var(--green);
       font-weight: bold;
       margin-top: 5px;
       text-align: center;
   }

   .artistName{
        color: var(--purple);
        font-weight: bold;
        margin: 20px 0 0 5px;
    }

    .duration{
        color: #FFF;
        font-size: 10px;
    }

    .faFullHeart{
        height: 20px;
        width: 20px;
        color: var(--green);
        cursor: pointer;
        margin: 5px 0 0 15px;
    }

    .faEmptyHeart{
        height: 20px;
        width: 20px;
        cursor: pointer;
        margin: 5px 15px 0 0;
    }

`;

export const CardFooter =  styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    line-height: 2.2;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 100%;
    height: 10%;
    margin-top: 20px;

    audio{
        background-color: var(--gray);
        max-width: 100%;
        height: 40px;
    }
`;

export const Player = styled.button`
    display: flex;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--green);
    
    .icon{
        margin: auto;
        color: #FFF
    }

    audio {
        display: hidden;
    }
`;