import React, { useState, useEffect } from 'react';
import {CheckboxGroup, CheckboxToggle} from 'react-rainbow-components';
import axios from 'axios';

import {Button, Card, Checkbox, Container, Grid, 
  Icon, Image, Input, Label, Menu, Message, 
  Segment,
  FeedUser,
  CardGroup,
  CardHeader} 
      from 'semantic-ui-react';


function HooksFetchData() {
    const [data, setData] = useState({ hits: [] });
    const [values, setValues] = useState({});
    const [checked, setChecked] = useState(true); 

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );

        console.log('>>> result is ',result);
        setData(result.data);
      };
      fetchData();
    }, []);


    const options = data.hits.map(item => {
        return {value: item.title, label: item.title.toString(), disabled: false }
    })


    console.log('>>>>>  options is ', options);
    console.log('>>>>>>>> data is ', data);


    /*
    const toggleStatus = values => {
        
        setValues({values: [] });
        console.log('values is ', values);
    }
    */

    const toggleStatus = e => {
        console.log('event >>> ', e);
    }


    return (
      <Card centered>
      <Card.Group centered itemsPerRow={ 1 }>
          {data.hits.map(item => (
            <Checkbox
            id = 'checkbox group'
            label = {item.title}
            options = {item.options}
            values = {item.title}
            onClick = { () => setChecked(!checked)}
            checked={checked}  
          />                                     
          ))}
      </Card.Group>    
    </Card>  


    )
  }

export default HooksFetchData;
/*
                          <Checkbox checked={student.paid_status}
                                    onClick={(e, data) => onHandleCheckbox({
                                      studentStatusID: student.id,
                                      paid_status: data.checked,
                                    })}
*/

/*
                <Card centered>
                    <Card.Group centered itemsPerRow={ foundLength || 1 }>
                        {avengersLocated.map(hero => (
                        <Card key = {hero.id} style = {{border: '5px solid pink', width: 'auto'}}>
                            <Label color = 'blue' style = {{width: 'auto'}}>{hero.name}</Label>
                        </Card>                                    
                        ))}
                    </Card.Group>    
                </Card>  
*/


// onChange = {toggleStatus}

/*
        <ul>
        {data.hits.map(item => (
            <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
        </ul>
*/

/*
        {
          data.hits.map(item => (
            <Checkbox
                id = 'checkbox group'
                label = 'cb label'
                options = {item.options}
                values = {item.title}
                onClick = { () => setChecked(!checked)}
                checked={checked}  
            />    
          ))}

*/

/*
      <div>
        {data.hits.map(item => (
          <CheckboxToggle
            options = {item.title}
            value = {item.title}
            onClick = { () => setChecked(!checked)}
            checked={checked}
         />

      ))}
      </div>

*/

/*

      <CheckboxGroup
        id = 'checkbox group'
        label = 'cb label'
        options = {options}
        values = {values}
        onClick = { () => setChecked(!checked)}
        checked = {true}    
      /> 
*/

/*
    <div>
        {data.hits.map(item => (
      
            <CheckboxToggle
              label = {item.title}
              value={value}
              
              onClick = { () => setChecked(!value)}
            />
        

        ))}
    </div>
*/

/*
      <Card centered>
      <Card.Group centered itemsPerRow={ 1 }>
          {data.hits.map(item => (
          <Card key = {item.title} style = {{border: '5px solid pink', width: 'auto'}}>
              <Label color = 'blue' style = {{width: 'auto'}}>{item.title}</Label>
          </Card>                                    
          ))}
      </Card.Group>    
    </Card>  
*/