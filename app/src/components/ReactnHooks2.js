// import React, {useState, useEffect, Fragment} from 'react';
// import React from 'react';
import Fuse from 'fuse.js';
// import avengerInfo from '../data/avengerInfo';
import React,  { useGlobal, useState ,setGlobal } from 'reactn';

import {Button, Card, Container, Grid, 
    Icon, Image, Input, Label, Menu, Message, 
    Segment,
    FeedUser} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();        
/*
setGlobal({
    avengers: avengerInfo,    
})
*/
const options = {
    shouldSort: true,
    threshold: 0.5,
    location: 5,
    distance: 10,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name",
    ]
  };
 
// export default function ReactnHooks() {
const ReactnHooks2 = () =>  {
    const [avengers, setList] = useGlobal('avengers');
    const fuse = new Fuse(avengers, options);  
    const [searchVal, searchAvengers] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        searchAvengers(value);
        console.log('value is ', value);
        console.log('searchVal is ', searchVal);
        console.log('avengersFound ', avengersFound);

    }

    const AvengerCard = ({avenger}) => {
        const {id, name, nickname, description, thumbnail, img} = avenger;
        return (
            <Card key = {avenger.id} fluid>
                <Image src = {avenger.img} alt = 'hero IMG'/>          
                <Card.Content key = {avenger.id}>     
                    <Label ribbon>  {avenger.name} </Label>                                 
                </Card.Content>
            </Card>
        )
    } 

    let avengersFound = searchVal ? fuse.search(searchVal) : avengers;
    let foundLength = avengersFound.length;

    return (
        

        <div  style = {{ border: `4px solid deeppink`, margin: `30px`, padding: `30px`}} >

            <Card centered >
                <Input type = 'text' placeholder = '...search' value = {searchVal} onChange = {handleChange}/>
            </Card>

                    <Card.Group centered itemsPerRow={ foundLength || 1 }>
                        {avengersFound.map(hero => (
                            <Card key = {hero.id}>
                                <AvengerCard avenger = {hero}/>
                            </Card>
                                            
                            ))}
                    </Card.Group>
       
        </div>
    )
}

export default ReactnHooks2;