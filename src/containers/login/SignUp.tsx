import styled from "styled-components";
import tw from "twin.macro";

const SignUpContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
max-height:100em;
background-color:#111111;
${tw`
flex flex-col justify-center items-center place-items-center p-8
`}
`;


const Heading=styled.h2
`align-self:center;
${tw`
    text-2xl font-extrabold text-indigo-500
    `}
`;

const Container=styled.div
`
max-height:100%;
row-gap:3em;
${tw`flex flex-col justify-center`}
`;

const Form=styled.form`
max-height:100em;
width:70%;
background-color: #343434;

${tw`
flex flex-col mt-8 justify-center p-7
`}

}

`;

const Input=styled.input`
outline:none;
max-height:4em;
min-height:2em;
width:100%;
flex-grow:1;
${
    tw`
    shadow-sm rounded-md pl-1
    `
}

`;

const ItemContainer=styled.div
`
background-color: #343434;
width:90%;
align-self:center;
${
    tw`
    flex flex-col justify-center place-items-center 
    `
}
`
const CancelButton=styled.button`

width:6em;
height:3em;
justify-self:center;
${tw`
   rounded-sm m-8 bg-red-500
`}

`
const SubmitButton=styled.button`

width:6em;
height:3em;
justify-self:center;

${tw`
   rounded-sm m-8 bg-green-500
`}

`
const ButtonContainer=styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-around;
`;

const Label=styled.label`
align-self:start;
color:#006466;
`;

export function SignUp(){

    return <SignUpContainer>
  
   <Form>
       <ItemContainer>
  <Heading>Sign Up</Heading>
       </ItemContainer>
  <Container>
      <ItemContainer>
 <Label htmlFor="email">Email</Label>
 <Input id="email" placeholder="abc@mail.com"/>
      </ItemContainer>
 <ItemContainer>
 <Label htmlFor="Name" >Name</Label>
 <Input id="Name" placeholder="Kishor Kumar"/>
 </ItemContainer>
 <ItemContainer>
 <Label>Contact No.</Label>
 <Input placeholder="21789343432" ></Input>
 </ItemContainer>
 <ItemContainer>
 <Label>Password</Label>
 <Input type='password'/>
 </ItemContainer>
 <ItemContainer>
 <Label>Confirm Password</Label>
 <Input type='password'/>
 </ItemContainer>
  </Container>
  <ButtonContainer>
      <SubmitButton>Submit</SubmitButton>
      <CancelButton>Cancel</CancelButton>
  </ButtonContainer>
   </Form>



    </SignUpContainer>
}
