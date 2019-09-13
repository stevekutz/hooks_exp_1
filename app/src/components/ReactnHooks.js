// import React, {useState, useEffect, Fragment} from 'react';
import React from 'react';
import Fuse from "fuse.js";
// import avengerInfo from '../data/avengerInfo';
import { useGlobal, useState ,setGlobal } from 'reactn';
// import {Link} from 'react-router-dom';
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


// export default function ReactnHooks() {
const ReactnHooks = () =>  {
    const [avengers, setList] = useGlobal('avengers');
    const [searchVal, searchAvengers] = useState('');

    console.log('avengers global is  ',  avengers);

    const handleChange = e => {
        const {name, value} = e.target;
        console.log('searchVal is ', value);
        // searchVal = value;
        searchAvengers(value);
    }

    const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "title",
          "author.firstName"
        ]
      };

    const fuse = new Fuse(avengers, options);  

    return (
        

        <div  style = {{ border: `1px solid blue`, margin: `30px`, padding: `30px`}} >

            <Card centered >
                <Input type = 'text' placeholder = '...search' value = {searchVal} onChange = {handleChange}/>
            </Card>

            <Card.Group centered itemsPerRow={5}>
                    {avengers.map(hero => (
                        <Card key = {hero.id}>
                            <Card.Content key = {hero.id}>               
                                <Label ribbon>  {hero.name} </Label>                                 
                            </Card.Content>
                        </Card>
                                         
                        ))}
            </Card.Group>


        
        </div>
    )
}

export default ReactnHooks;

/*
<Card.Group centered itemsPerRow={5}
                
                style = {{ border: `1px solid blue`, margin: `10px`}}>
                {avengers.map(hero => (
                    <Card key = {hero.id}>
                        <Card.Content key = {hero.id}>               
                            <Label>  {hero.name} </Label>                                 
                        </Card.Content>
                    </Card>
                    
                    
                    ))}
            </Card.Group>
*/