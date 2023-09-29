import React, { Fragment } from 'react';
import Button from "./components/Button";
import Alert from './components/Alert';
import { useState } from 'react';


function App() {

  const [alertVisible, setAlertVisibility] = useState(false);

  return (

    <div>

      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>}
      <Button color="primary" onClick={() => console.log(setAlertVisibility(true))} text='Success' />

    </div>


  )

};

export default App
