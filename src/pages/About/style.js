import styled from "styled-components";

export const SectionMe = styled.section`

display: flex;
align-items: center; 
justify-content: space-between;
max-width: 900px;
height:100%;
margin: 5em;

& > div#foto > img{
    width: min(35vw, 300px);
    height: min(35vw, 300px);
    border-radius: 50%;
    box-shadow: 0px 0px 20px 5px ${props => props.theme.card_shadow},
                0px 0px 5px 5px  ${props => props.theme.card_shadow2};
}

#texto{
    margin-left: 20px;
    max-width: 60%;
}

#texto > h1{
    color: ${props => props.theme.color_primary};
    font-size: min(4.5vw, 45px);
}

#texto > p{
    
    color: ${props => props.theme.color_text};
    font-size: min(3.1vw, 25px) ;
    margin-top: 20px;
}

@media (max-width:500px) {
    &{
        flex-direction: column;
        height: 400px
    }
    #texto{
        margin-left: auto;
        max-width: 100%;
    }
    & > div#foto > img{
        width: min(45vw, 300px);
        height: min(45vw, 300px);
    }
    #texto > h1{
        font-size: min(7vw, 45px);
    }   

    #texto > p{  
        font-size: min(4vw, 25px) ;
    }
}

`