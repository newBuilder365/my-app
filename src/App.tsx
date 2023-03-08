import type { FC } from "react";
import Uploader from "./components/uploader";
import ImageList from "./components/imageList";
import { PhotoProvider } from "./provider/photoContextProvider";

const App: FC = () => (
  <div className="App">
    <PhotoProvider>
      <ImageList />
      <Uploader />
    </PhotoProvider>
  </div>
);

export default App;
