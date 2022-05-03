import styled from "styled-components";
import tw from "twin.macro";
import img from './car-bg.jpg'



const AboutContainer=styled.div`
width:100vw;
height:100vh;

&:before{
    content:'';
    min-width:100%;
    min-height:100%;
    background-repeat:no-repeat;
    background-image:url(${img});
    position:absolute;
    top:0;
    left:0;
    background-size:contain;
    opacity:0.5;
    z-index:-1;
}

${tw`  
  flex flex-col justify-center
`}

`;

const ItemContainer=styled.div`
  z-index:1;
 max-height:100em;

 ${
   tw`
   flex flex-col justify-center
   `
 }

`;


const Heading=styled.h1`
z-index:2;
max-height:1em;
align-self:center;
max-width:90%;
  ${tw`
  text-white text-5xl tracking-wide mb-5`}
`;


const Text=styled.h2`
max-height:3em;
max-width:90%;
align-self:center;
z-index:2;
  ${
    tw`
     text-white text-xl
    `
  }
`


export function AboutUs(){
  return <AboutContainer>
   
   <ItemContainer>
     <Heading>About Us</Heading>
     <Text>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut impedit id assumenda laudantium omnis perspiciatis nihil ex quisquam similique? Quia illo dolores distinctio minus modi eveniet ea autem iure? 
     </Text>
   </ItemContainer>
  </AboutContainer>

}