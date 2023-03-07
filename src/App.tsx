import type { FC } from 'react';
import Uploader from './components/uploader'
import ImageList from './components/imageList'

const App: FC = () => (
  <div className="App">
    <div style={{ height: '50vh' }}><ImageList /></div>
    <div style={{ marginBottom: 0 }}>
      <Uploader />
    </div>
  </div>
);

export default App;