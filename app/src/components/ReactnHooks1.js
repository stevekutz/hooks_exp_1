import React,  { useGlobal, useState ,setGlobal } from 'reactn';

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


// export default function ReactnHooks1() {
const ReactnHooks1 = () =>  {
    const [avengers, setList] = useGlobal('avengers');
    const [searchVal, searchAvengers] = useState('');


    const handleChange = e => {
        searchAvengers(e.target.value);
        console.log('value is ', e.target.value);
     //   searchAvengers(value);
        console.log('searchVal is ', searchVal);
        console.log('avengersFound ', avengersFound);
    }

    const avengersFound = avengers.filter(heroFound => {
        return heroFound.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1;
    })

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

export default ReactnHooks1;
