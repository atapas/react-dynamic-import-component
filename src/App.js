import React, { lazy, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import * as meta from './meta/demo-data.json';

const importDemo = file =>
  lazy(() =>
    import(`./demo/${file}`)
      .catch(() => console.log('Error in importing'))
);

function App() {
  const mataDemoData = meta.data;
  const [selectedDemo, setSelectedDemo] = useState([]);
  
  async function loadDemo(filtered) {
    const promise =
      filtered.map(async demo => {
        const Demo = await importDemo(demo.file);
        return <Demo key={demo.id} />;
      });

    Promise.all(promise).then(setSelectedDemo);
  }

  const selectDemo = file => {
    const filtered = mataDemoData.filter(elem => {
      return elem.file === file;
    });
    loadDemo(filtered);
  }

  return (
    <div className="App">
      <h3>Dynamic Import</h3>
      <div className="btn-set">
        {
          mataDemoData.map((demoData, index) => (
            <React.Fragment key = {index}>
              <Button 
                variant="outline-info" 
                onClick={() => selectDemo(demoData.file)}>{demoData.name}
              </Button> {' '}
            </React.Fragment>
          ))
        }
      </div>

      <div className="demo-ground">
        <React.Suspense fallback='Loading demo, hang on...'>
          {selectedDemo}
        </React.Suspense>
      </div>
      
    </div>
  );
}

export default App;
