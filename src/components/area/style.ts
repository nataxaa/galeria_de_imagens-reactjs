import styled from "styled-components";


export const Container = styled.div`

    margin: auto ;
    text-align:center ;
    
    border-radius:5px ;
    max-width:75rem ;
    padding:20px ;


`
export const Alertloading = styled.div`
`
export const Alert = styled.div`
    
    text-align:center ;

`


export const Gallery = styled.div`
   margin: 0 auto ;
   text-align:center ;
   max-width: 60rem ;
    display: grid ;
    grid-template-columns: repeat(4, 1fr) ;
    gap:10px;
    max-height:50% ;

`
export const UploadingForm = styled.form`

    background-color: #466060 ;
    padding:15px ;
    border-radius:10px ;
    max-width: 35rem;
    margin: 2rem auto ;
    text-align:center ;
    input[type=submit]{
        background-color: #0E0F19 ;
        color: white ;
        border-radius:10px ;
        padding:8px 16px ;
        border: 0 ;
        cursor: pointer;
        :hover{
            background-color: green ;
        }
    }
    input[type="file"] {
   display:none ;
}

label {
   padding: 10px ;
    width: 200px;
    background-color: #0E0F19;
    color: #FFF;
    text-transform: uppercase;
    border-radius: 10px ;
    margin-right:1rem ;
   
    
    cursor: pointer;
}
    


`



