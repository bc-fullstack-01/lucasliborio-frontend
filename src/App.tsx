import React from 'react';
import { BrowserRouter} from 'react-router-dom'

import { PagesRoute } from './routes';

function App() {
  return (
    <BrowserRouter>
      <PagesRoute/>
    </BrowserRouter>
  )
}
export default App;
