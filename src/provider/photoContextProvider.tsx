import React, { createContext, useState } from "react";

interface PhotoContextType {
  imageList: string[];
  addImage: (image: string[]) => void;
}

export const PhotoContext = createContext<PhotoContextType>({
  imageList: [],
  addImage: () => {},
});

export const PhotoProvider: React.FC<any> = ({ children }) => {
  const [imageList, setImageList] = useState<string[]>([]);

  const addImage = (images: string[]) => {
    setImageList([...imageList, ...images]);
  };

  return (
    <PhotoContext.Provider value={{ imageList, addImage }}>
      {children}
    </PhotoContext.Provider>
  );
};
