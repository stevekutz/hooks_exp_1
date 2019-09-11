import React, {useState, useEffect, Fragment} from 'react';
import avengerInfo from '../data/avengerInfo';
// import {Link} from 'react-router-dom';
import {Button, Card, Container, Grid, 
    Icon, Image, Label, Menu, Message, 
    Segment} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();        


export default function ReactnHooks() {
    const [avengers, setList] = useState(avengerInfo);


    return (
        <div>
    
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
        
        </div>
    )
}