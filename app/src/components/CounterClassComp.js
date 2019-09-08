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
                <Card.Group centered>
                   <Card.Content> {countVal}</Card.Content> 
                   {/* will cause Maximum update depth exceed error*/}
                   {/* <Button onClick = { this.incrementCounter() }> increment </Button> */}
                   
                   <Button  color = 'blue' inverted onClick = { () => this.incrementCounter() }> Increment</Button>
                   <Label>{countVal}</Label>
                </Card.Group>

            </Fragment>
        )


    }


}

