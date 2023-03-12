import React, { useContext, useEffect } from "react";
import { Image } from "antd";
import { PhotoContext } from '../provider/photoContextProvider'

const App: React.FC = () => {
  const imageContext = useContext(PhotoContext)
  const imageList = imageContext.imageList

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    fetch("http://114.116.22.167:9998/images").then((res) => {
      res.json().then((res: { images: string[] }) => {
        imageContext.addImage(res.images)
      });
    });
  };
  return (
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) =>
          console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      {imageList &&
        imageList?.map((v) => <Image key={v} width={200} src={v} />)}
    </Image.PreviewGroup>
  );
};

export default App;
