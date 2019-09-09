import React, {useState, Fragment} from 'react';
import {Button, Card, Container, Grid, 
    Icon, Image, Label, Menu, Message, 
    Segment} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();        

export default function CounterHooks() {
    const [countVal, incrementCount] = useState(0);

    return (
        <Fragment>
            <Card  centered style = {{display: 'flex', justifyContent: 'center', width: '25%'}}>  
                <Segment>
                    <Card.Header textAlign = 'center'> Hooks Basic </Card.Header>    
                    <Card.Description textAlign = 'center'> {countVal}</Card.Description> 
                </Segment> 
                <Segment>
                    <Card.Content textAlign = 'center'>
                        {/* will cause Maximum update depth exceed error*/}
                        {/* <Button onClick = { this.incrementCounter() }> increment </Button> */}    
                        <Button  color = 'purple' inverted onClick = { () => incrementCount(countVal + 1) }> Increment</Button>
                        <Label>{countVal}</Label>     
                    </Card.Content>                        
                </Segment> 
            </Card>
        </Fragment>
    )
}