import React, {Component, Fragment} from 'react';
import {Button, Card, Container, Grid, 
    Icon, Image, Label, Menu, Message, 
    Segment} 
        from 'semantic-ui-react';
    
    import {PushSpinner, GuardSpinner, 
        PongSpinner, TraceSpinner} 
        from 'react-spinners-kit';

export default class CounterClassComp extends Component{
    state = {
        countVal: 0,


    }

    incrementCounter = () => {
        const {countVal} = this.state;
        this.setState(prevState => ({countVal: ++prevState.countVal}))
    }

    render(){
        const {countVal} = this.state;
        return(
            // const {countVal} = this.state;  // NOT HERE

            <Fragment>
                <Card  centered style = {{display: 'flex', justifyContent: 'center', width: '25%'}}>         
                    <Segment>
                        <Card.Header textAlign = 'center'> Counter Class Component </Card.Header>
                        <Card.Description textAlign = 'center'> {countVal}</Card.Description> 
                    </Segment>
                    <Segment>        
                        <Card.Content textAlign = 'center'>
                            {/* will cause Maximum update depth exceed error*/}
                            {/* <Button onClick = { this.incrementCounter() }> increment </Button> */}       
                            <Button  color = 'blue' inverted onClick = { () => this.incrementCounter() }> Increment</Button>
                            <Label>{countVal}</Label>                                    
                        </Card.Content>
                    </Segment> 
                </Card>
            </Fragment>
        )
    }
}

