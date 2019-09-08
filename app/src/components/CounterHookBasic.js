import React, {useState, Fragment} from 'react';
import {Button, Card, Container, Grid, 
    Icon, Image, Label, Menu, Message, 
    Segment} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';
import { brotliDecompress } from 'zlib';

export default function CounterHooks() {
    const [countVal, incrementCount] = useState(0);

    return (
        <Fragment>
                <Card>
                
                
                
                <Card.Content>
                
                <Card.Group centered style = {{border: `1px solid pink`}}>
                <Card.Header> Hooks Basic </Card.Header>
                <Card.Content>
                <Card.Description> {countVal}</Card.Description> 
                {/* will cause Maximum update depth exceed error*/}
                {/* <Button onClick = { this.incrementCounter() }> increment </Button> */}
                
                <Button  color = 'blue' inverted onClick = { () => incrementCount(countVal + 1) }> Increment</Button>
                <Label>{countVal}</Label>     
                </Card.Content>
                
                </Card.Group>  
                
                
                
                </Card.Content>    
                
                </Card>

        </Fragment>
    )
}