import styled from 'styled-components';

export const ListPageBtn = styled.button`
   background-color: transparent;
   border: 1px solid var(--purple);
   color: #FFF;
   border-radius: 10px;
   padding: 10px;
   margin: 20px;
   transition: 0.5s ease-in-out;

   &:hover{
        background-color: var(--purple);
   }
`;


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 100%;


   .notFound{
      color: #FFF;
      font-weight: bold;
   }
`;