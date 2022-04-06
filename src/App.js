import React, {useState, useEffect} from 'react';
import { fetchSettings } from './Services/SettingsService'

function App() {
  const [appSettings, setAppSettings] = useState(null);

  useEffect( () => {
    (async function fetchData() {
      setAppSettings(await fetchSettings());
    })()
  },[])

  console.log("appSettings", appSettings);

  if(!appSettings)
    return <div>Loading</div>

  return <div>Hello {appSettings.name}</div>;
}

export default App;
