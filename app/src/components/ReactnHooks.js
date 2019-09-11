// import React, {useState, useEffect, Fragment} from 'react';
import React from 'react';
import avengerInfo from '../data/avengerInfo';
import { useGlobal, setGlobal } from 'reactn';
// import {Link} from 'react-router-dom';
import {Button, Card, Container, Grid, 
    Icon, Image, Input, Label, Menu, Message, 
    Segment} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();        

setGlobal({
    avengers: avengerInfo,    
})


// export default function ReactnHooks() {
const ReactnHooks = () =>  {
    const [avengers, setList] = useGlobal('avengers');

    console.log('avengers global is  ',  avengers);

    return (
        <div  style = {{ border: `1px solid blue`, margin: `30px`, padding: `10px`}} >

            <Card centered >
                <Input type = 'text' placeholder = '...search'/>
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