import styled from "styled-components";

export const Container = styled.div`
    
    background-color: black ;
    border-radius: 10px;
    padding:10px ;
    

    img{
        max-width: 100%;
        height: 12rem;
        border-radius:10px ;
    }
    div.name{
        margin-top:0.1rem ;
        color: white ;
    }
    button{
        
        display:block ;
        text-align:left ;
        margin-bottom:0.3rem ;
        border-radius:1rem ;
        height:1rem ;
        width:1rem ;
        text-align:center ;
        border: 0 ;
        outline: none ;
        background-color: #DF2935;
        cursor: pointer;
        :hover{
            opacity:.9 ;
        }
        
    }

`