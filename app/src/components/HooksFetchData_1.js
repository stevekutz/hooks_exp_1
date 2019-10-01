import React, { useState, useEffect } from 'react';
import {Card, Button, CheckboxGroup, Checkbox} from 'react-rainbow-components';
import axios from 'axios';


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
    <div>

      <CheckboxGroup
        id = 'checkbox group'
        label = 'cb label'
        options = {options}
        values = {values}
        onClick = { () => setChecked(!checked)}
        checked = {true}    
      /> 

      <div>
      {data.hits.map(item => (
        <div> 
          <h4 key = {item.title} >{item.title}</h4>
       
        </div>
        
      )
    )}
    </div>



    </div>


    )
  }


export default HooksFetchData;
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
          <Checkbox
            options = {item.title}
            value = {item.title}
            onClick = { () => setChecked(!checked)}
            checked={checked}
         />

      ))}
      </div>

*/