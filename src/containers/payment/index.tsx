import styled from "styled-components";
import tw from "twin.macro";

const Container=styled.div
`
background-color:#111111;
height:100em;
width:100vw;
${

    tw`flex flex-col justify-center items-center`
}
`
const Form=styled.form`
max-height:100em;
min-width:35vw;
max-width:80vw;

background-color:#464646;
row-gap:1.2em;

${
    tw`flex flex-col m-8 p-6 rounded-md shadow-xl 
    `
}

`;

const ItemContainer=styled.div`

${
    tw`
     flex flex-col justify-start
    `
}
`;

const Label=styled.label`

${
    tw`text-sm text-white
    `
}

`;


const Input=styled.input`
width:auto;
max-height:2em;
outline:none;
background-color:#7a7a7a;
${
    tw`
     shadow-xl m-2 text-white rounded-sm
    `
}

`;


const CancelButton=styled.button`

width:6em;
height:3em;
justify-self:center;
${tw`
   rounded-sm m-8 bg-red-500 hover:bg-white hover:border hover:text-red-500 hover:border-red-500
`}

`
const SubmitButton=styled.button`

width:6em;
height:3em;
justify-self:center;

${tw`
   rounded-sm m-8 bg-green-500 hover:bg-white hover:border hover:text-green-500 hover:border-green-500
`}

`
const ButtonContainer=styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
`;

const Heading=styled.div`
${
    tw`text-center text-white text-sm font-thin`
}
`
const Info=styled.div`
max-width:30em;

${
    tw`border border-green-400 p-2 rounded-md
    `
}

`

export function Payment(){
return ( 
<Container>
    <Form>
        <ItemContainer>
       <Heading>
           Payment via ATM Card
       </Heading>
       <Info>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure architecto cons</Info>
        </ItemContainer>
  <ItemContainer>
<Label>Name on Card</Label>
<Input type='text' placeholder="Kishor Kumar" />
  </ItemContainer>
  <ItemContainer>
<Label>Card No.</Label>
<Input type='text' placeholder="0000-0000-0000-0000" />
  </ItemContainer>
  <ItemContainer>
<Label>CVV</Label>
<Input style={{
    maxWidth:"10em"
}}  placeholder="877" />
  </ItemContainer>
  <ItemContainer>
<Label>Expiry Date</Label>
<Input type="month" style={{
    maxWidth:"15em"
}}  value="2022-03" />
  </ItemContainer>
 <ButtonContainer>
<SubmitButton>Proceed</SubmitButton>
 <CancelButton>Cancel</CancelButton>
 </ButtonContainer>
    </Form>
</Container>
)
}