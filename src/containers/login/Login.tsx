import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navBar";

const LoginContainer=styled.div`
max-width:100vw;
height:100em;
background-color:#111111;

${tw`
  flex flex-col justify-center items-center place-items-center
`}

`
;

const FormContainer=styled.div`
max-height:100em;
max-width:90vw;
background-color:#464646;
box-shadow:4px 4px 10px 4px #343434;
${tw`
 flex flex-col justify-center items-center rounded-md p-8 m-8 
 `}
`;

const Form=styled.form`
row-gap:0.2em;
max-height:40em;
max-width:40em;

${tw`
 flex flex-col justify-center items-center
`

}
`;


const Input=styled.input`
max-width:40em;
min-width:20em;
max-height:2.5em;
min-height:2em;
outline:none;
background-color:#575757;

${
tw`
shadow-md rounded-sm text-white
m-8
`
}

`;

const ItemContainer=styled.div`
width:100%;
max-height:1.5em;
padding-left:35px;
display:flex;
justify-content:left;
`

const Label=styled.label`
${
  tw`text-indigo-300
  `
}
`

const SubmitButton=styled.button`

${tw`
 border rounded-md text-xl pt-1 pb-1 pl-3 pr-3 bg-blue-500 mt-6 text-white hover:bg-white hover:border-white hover:text-blue-500
`}

`

const Text=styled.div`
max-height:5em;
${tw`
   text-4xl mb-5 text-green-400
  `}

`

export function Login(){
    return <LoginContainer>
      <FormContainer>
      <Text>Login</Text>
          <Form>
       <ItemContainer>
  <Label>Username</Label>

       </ItemContainer>
  <Input></Input>
       <ItemContainer>
  <Label>Password</Label>

       </ItemContainer>
  <Input type='password'></Input>

   <SubmitButton>Login</SubmitButton>   

          </Form>
      </FormContainer>
        

    </LoginContainer>;
}


export * from './SignUp';