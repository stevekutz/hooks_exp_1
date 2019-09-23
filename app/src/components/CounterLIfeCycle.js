import React, {Component} from 'react';
import {Card, Button, Textarea} from 'react-rainbow-components';

// incrementCounter = () => {
//     const {countVal} = this.state;
//     this.setState(prevState => ({countVal: ++prevState.countVal}))
// }

class CounterLifeCycle extends Component {
    state = {
        count: 0,
        countValStr: 'initial',
    }

    componentDidMount() {
        document.title = `Initial clicked ${this.state.count} times`;
         // this.setState = ({ countValStr: `Initial clicked ${this.state.count} times` });
        // this.setState({count: 100});
       // this.setState = ({ countValStr: `Initial clicked ${this.state.count} times` });
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = ` Updated clicked ${this.state.count} times`;
        //this.state.countValStr = ` Updated clicked ${this.state.count} times`;
    }
    
    render() {
        return (
            <div>
                <Card>
                    <Button onClick = {() =>
                        this.setState(prevState => (
                            {count: ++prevState.count},
                            {countValStr: ` Updated clicked ${this.state.count} times`}             
                            ))
                    }
                        >
                        Clicked {this.state.count} times 
                    </Button> 
                    <Textarea 
                        label = {`${this.state.countValStr}`} 
                        placeholder = {`${this.state.countValStr}`}  
                    />
                    <p> {this.state.countValStr}</p>
                </Card>

            </div>
        )

    }
        
}

export default CounterLifeCycle;