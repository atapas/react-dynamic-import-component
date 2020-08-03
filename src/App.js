import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import ShapeDemo from './demo/shape-demo';
import ColorDemo from './demo/color-demo';
import SizeDemo from './demo/size-demo';

function App() {
  const [demo, setDemo] = useState();

  const selectDemo = type => {
    setDemo(type);
  }

  return (
    <div className="App">
      <h3>Explicit Import</h3>
      <div className="btn-set">
        <Button variant="outline-info" onClick={() => selectDemo('shape')}>Shape Demo</Button>{' '}
        <Button variant="outline-info" onClick={() => selectDemo('color')}>Color Demo</Button>{' '}
        <Button variant="outline-info" onClick={() => selectDemo('size')}>Size Demo</Button>{' '}
      </div>

      <div className="demo-ground">
        { demo === 'shape' && <ShapeDemo /> }
        { demo === 'color' && <ColorDemo /> }
        { demo === 'size' && <SizeDemo /> }
      </div>
      
    </div>
  );
}

export default App;
