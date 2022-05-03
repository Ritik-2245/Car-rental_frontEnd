import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
// import { Payment } from './containers/payment';
// import { AboutUs } from './containers/AboutUs';
import { HomePage } from './containers/HomePage';
// import { Login } from './containers/login/Login';
// import { SignUp } from './containers/login/SignUp';
// import { Navbar } from './components/navBar';

const AppContainer=styled.div`

width:100vw;
height:100vh;
max-height:100em;

&:before{
  content:'';
  background-color:#111111;
  position:absolute;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  z-index:-2;
}

${
tw`
w-full
h-full
flex
flex-col
overflow-auto
`

}
`

function App() {
  return (
    <AppContainer>
 <HomePage/>
 {/* <SignUp/> */}
 {/* <Login/> */}
 {/* <Payment/> */}
{/* <AboutUs/> */}
    </AppContainer>
  );
}

export default App;
