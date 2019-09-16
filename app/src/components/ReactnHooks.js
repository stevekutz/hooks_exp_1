// import React, {useState, useEffect, Fragment} from 'react';
// import React from 'react';
import Fuse from 'fuse.js';
// import avengerInfo from '../data/avengerInfo';
import React,  { useGlobal, useState ,setGlobal } from 'reactn';

import {Button, Card, Container, Grid, 
    Icon, Image, Input, Label, Menu, Message, 
    Segment,
    FeedUser,
    CardGroup,
    CardHeader} 
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
    threshold: 0.6,
    location: 5,
    distance: 10,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name",
    ]
  };


// export default function ReactnHooks() {
const ReactnHooks = () =>  {
    const [avengersLocated, locatedAvengers] = useGlobal('avengersLocated');
    console.log('avengersLocated >>>>>> ' , avengersLocated);

    const [avengers, setList] = useGlobal('avengers');
    const fuse = new Fuse(avengers, options);  
    const [searchVal, searchAvengers] = useState('');
   // const [searchFound, avengersFound = fuse.search(searchVal)] = useState([]);

    let avengersFound = fuse.search(searchVal);
    let foundLength = avengersFound.length;

    const handleChange = e => {
        const {name, value} = e.target;
        searchAvengers(value);
        console.log('value is ', value);

     //   searchAvengers(value);
        console.log('searchVal is ', searchVal);
        console.log('avengersFound ', avengersFound);

    }

    return (
        

        <div  style = {{ border: `1px solid seagreen`, margin: `30px`, padding: `30px`}} >


            <Card.Group centered itemsPerRow={2}>
                <Card style = {{border: '1px solid brown', width: 'auto'}} >
                    <Card.Content>
                        <Label style = {{lineHeight: `1.5`}}> Hooks + Fuse </Label>
                    </Card.Content>
                </Card>    

                <Card style = {{border: '1px solid brown', width: 'auto'}}  fluid >
                    <Card.Content>
                        <Input type = 'text' placeholder = '...search' value = {searchVal} onChange = {handleChange}/>
                    </Card.Content>                
                </Card>
            </Card.Group>


            { avengersLocated
                ?                
                <Card centered>
                    <Card.Group centered itemsPerRow={ foundLength || 1 }>
                        {avengersLocated.map(hero => (
                        <Card key = {hero.id} style = {{border: '5px solid pink', width: 'auto'}}>
                            <Label color = 'blue' style = {{width: 'auto'}}>{hero.name}</Label>
                        </Card>                                    
                        ))}
                    </Card.Group>    
                </Card>  
                :
                <Card>
                    <Label> nothing found in ReactnHooks2 </Label>
                </Card>            

            }


            {searchVal === ''
                ?
                    (<Card.Group centered itemsPerRow={5}>
                            {avengers.map(hero => (
                                <Card key = {hero.id}>
                                    <Card.Content key = {hero.id}>               
                                        <Label ribbon>  {hero.name} </Label>                                 
                                    </Card.Content>
                                </Card>
                                                
                                ))}
                    </Card.Group>)
                :
                    (<Card.Group centered itemsPerRow={ foundLength || 1 }>
                        {avengersFound.map(hero => (
                            <Card key = {hero.id}>
                                <Card.Content key = {hero.id}>               
                                    <Label ribbon>  {hero.name} </Label>                                 
                                </Card.Content>
                            </Card>
                                            
                            ))}
                    </Card.Group>)           
            }       
        </div>
    )
}

export default ReactnHooks;

/*
            <Card style = {{border: '1px solid brown', width: 'auto'}}  fluid >
                <Card.Group centered itemsPerRow={ foundLength || 1 }>
                    {avengersLocated.map(hero => (
                    <Card key = {hero.id}>
                        <Label>hero.name</Label>
                    </Card>                                    
                    ))}
                </Card.Group>    
            </Card>   
*/


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