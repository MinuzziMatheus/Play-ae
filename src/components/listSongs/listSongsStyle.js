import styled from 'styled-components';


export const SearchContainer = styled.div`
    width: 98%;
    display: flex;
    justify-content: center;
    margin: 20px;

    .favoritePageBtn{
        background-color: transparent;
        border: 1px solid var(--purple);
        color: #FFF;
        border-radius: 10px;
        padding: 10px;
        margin-right: 20px;
        transition: 0.5s ease-in-out
    }

    .favoritePageBtn:hover{
        background-color: var(--purple);
    }
`;

export const Search = styled.input`
    width: 30%;
    height: 50px;
    border-radius: 10px;
    color: var(--purple);
    font-weight: bold;
    padding: 5px;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 100%;

    .loading{
        color: #FFF;
        font-weight: bold;
    }
`;

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;

   margin: 15px;
   width: 250px;
   height: 300px;
   border-radius: 20px;

   background-color: var(--gray);
   box-shadow: 0 0 10px rgba(0,0,0, 0.8);

   .albumImg{
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
       height: 50%;
   }

   .title{
       color: var(--green);
       font-weight: bold;
       margin-top: 5px;
       text-align: center;
   }

   .artistName{
        color: #FFF;
        margin: 5px 0 0 5px;
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
    margin-top: 50px;

    audio{
        background-color: var(--gray);
        max-width: 100%;
        height: 40px;
    }
`;

export const Player = styled.button`
    display: flex;
    align-items: center;
    /* position: absolute;
    bottom: 0px;
    left: 0; */

    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--green);
    
    .icon{
        margin: auto;
        color: #FFF
    }
`;

