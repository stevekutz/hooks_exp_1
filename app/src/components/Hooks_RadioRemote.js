import React, { Component, useState } from 'react'
import { Button, Radio } from 'semantic-ui-react'

export default function HooksRadioExampleRemoteControl () {
  //state = { checked: false }
  const [checked, setChecked] = useState(true); 
  //toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))


    return (
      <div>
     
        <Radio
            label='Check this radio'
            onClick = { () => setChecked(!checked)}
            checked={checked}
        />
      </div>
    )

}