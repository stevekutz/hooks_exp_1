import React, { useState, useEffect } from 'react';
import {Card, Button, CheckboxGroup} from 'react-rainbow-components';
import axios from 'axios';


function HooksFetchData() {
    const [data, setData] = useState({ hits: [] });
    const [values, setValues] = useState([]);

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
        return {value: item.title, label: item.title.toString(), disabled: false, isSelected: true }
    })


    console.log('>>>>>  options is ', options);


    const toggleStatus = values => {
         console.log('values is ', values);
        setValues(values);
    }

    return (
    <div>

        <CheckboxGroup
            id = 'checkbox group'
            label = 'cb label'
            options = {options}
            values = {values}
            onChange = {toggleStatus}
            isChecked = {true}
        />    
    
    </div>


    );
  }


export default HooksFetchData;

/*
        <ul>
        {data.hits.map(item => (
            <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
        </ul>
*/