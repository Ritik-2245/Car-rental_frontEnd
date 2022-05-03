import React from "react";
import styled from "styled-components";
import  Logo  from "../LOGO";
import tw from "twin.macro";
import { NavItems } from "./navitems";

const NavbarContainer=styled.div`
min-height:60px;

${
    tw`
   w-full
   min-w-full
   max-w-screen-2xl
   flex
   flex-row
   items-center
   lg:pl-12
   lg:pr-12
   justify-between
    `
}
`

const LogoContainer=styled.div`

`

export function Navbar(){

    return <NavbarContainer>
  <LogoContainer>
      <Logo color="white" bgColor="dark"/>
  </LogoContainer>
     <NavItems/>
    </NavbarContainer>

}
