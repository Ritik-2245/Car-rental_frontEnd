import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button';
import { Marginer } from '../marginer';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { useState } from 'react';

const CardContainer=styled.div`
min-height:4.3em;
box-shadow : 0 1.3px 12px -3px rgba(0,0,0,0.4);
${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-6
md:pr-6
`
};
`;

const ItemContainer=styled.div  
`
${tw`
flex
relative
`
};
`;

const Name=styled.span`
text-gray-600
text-xs
md:text-sm
`;

const Icon=styled.span`
${tw`
  text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3
`}
`

const LineSeperator=styled.span`
 width:2px;
 height:45%;
 ${
     tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
     `
 }
`;

const DateCalendar=styled(Calendar)`
 position:absolute;
 max-width:none;
 top:1.5em;
 left:-10em;
 border-radius:0.5em;
 box-shadow: 5px 5px 5px 5px 5px black;
 
`

export function BookCard(){
    const [startDate,setStartDate]=useState(null);
    const [isStartOpen,setStartOpen]=useState(false)

    const handlerForStart=()=>{
        if(isReturnOpen)
        setReturnOpen(false)
        setStartOpen(pre=>!pre)
    }
    
    
    const [returnDate,setReturnDate]=useState(null);
    const [isReturnOpen,setReturnOpen]=useState(false)
    
    const handlerForReturn=()=>{
        if(isStartOpen)
        setStartOpen(false)
        setReturnOpen(pre=>!pre)
    }
    return <CardContainer>

        <ItemContainer>
            <Icon>
          <FontAwesomeIcon onClick={handlerForStart} icon={faCalendarAlt}/>
            </Icon>
        <Name>pick Up Date</Name>
        {isStartOpen ? <DateCalendar/>:null}
        
        </ItemContainer>
        <LineSeperator/>
        <ItemContainer>
            <Icon>
          <FontAwesomeIcon onClick={handlerForReturn} icon={faCalendarAlt}/>
            </Icon>
        <Name>Return Date</Name>
        {isReturnOpen ? <DateCalendar/>:null}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em"/>
        <Button text='Book your ride' />
    </CardContainer>
}