// import React, {useState, useEffect, Fragment} from 'react';
import React from 'react';
import Fuse from 'fuse.js';
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
const options = {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 10,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name",
    ]
  };


// export default function ReactnHooks() {
const ReactnHooks = () =>  {
    const [avengers, setList] = useGlobal('avengers');



    const fuse = new Fuse(avengers, options);  
  //  const avengersFound = fuse.search(searchVal);

    const [searchVal, searchAvengers] = useState('');
   // const [searchFound, avengersFound = fuse.search(searchVal)] = useState([]);

    //let avengersFound = fuse.search(searchVal);

    let avengersFound = fuse.search(searchVal);

    const handleChange = e => {
        const {name, value} = e.target;
        searchAvengers(value);
        console.log('value is ', value);

     //   searchAvengers(value);
        console.log('searchVal is ', searchVal);
        console.log('avengersFound ', avengersFound);
 
    }

    
    /*
    const avengersFound = searchVal ? fuse.search(avengersFound) : avengers;  

    const avengerCards = ({avenger}) => {
        const {id, name, nickname, description, thumbnail, img} = avenger;



    }  
    */

    return (
        

        <div  style = {{ border: `1px solid blue`, margin: `30px`, padding: `30px`}} >

            <Card centered >
                <Input type = 'text' placeholder = '...search' value = {searchVal} onChange = {handleChange}/>
            </Card>

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
                    (<Card.Group centered itemsPerRow={5}>
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