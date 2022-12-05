import styled from '@emotion/styled'

export const Container = styled.div`
margin: 30px auto;
max-width: 350px;
background-color: white;
border-radius: 10px;
text-align: center;
box-shadow: 5px 5px 5px 5px #A9A9A9;
text-transform: none;
`
export const Description = styled.div`
font-size: 16px;
letter-spacing: 0.3px;
color: black;

`

export const Avatar = styled.img`
border-radius: 500px; 
border: 1px solid black;
width:150px;
margin:20px auto 20px auto;  
`
export const NameProfile = styled.p`
margin: 0;
padding: 0;
margin-bottom: 8px;
font-weight: 700;
`
export const NameTag = styled.p`
  text-algin: center;
  color: #BBC1C9;
`
export const Stats = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
list-style: none;
padding: 0;
margin: 0;
background-color: whitesmoke;
border-top: 2px solid rgba(99, 96, 96, 0.1);
border-radius: 10px;
  
 
`
export const InfoList = styled.li`
&:not(:first-of-type) {
  border-left: 2px solid rgba(99, 96, 96, 0.1);
}
text-align: center;
width: 30%;    
`
export const Info = styled.p`
padding: 10px;
font-weight: 500;
font-size: 13px;
color: #BBC1C9;
 
`

export const InfoQuantity = styled.span`
font-weight: 500;
font-size: 25px;
color:black;
 
`
  
  



