import React, { useContext } from "react";
import { UploadProps, FloatButton } from "antd";
import { message, Upload } from "antd";
import { PhotoContext } from "../provider/photoContextProvider";
import { CloudUploadOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const imageContext = useContext(PhotoContext);
  const uploadChange: UploadProps["onChange"] = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      console.log("info", info);
      imageContext.addImage([info.file.response.imageUrl]);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <Upload
      name="image"
      multiple={true}
      action="http://localhost:9998/upload"
      showUploadList={false}
      onChange={uploadChange}
    >
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 94 }}
        icon={<CloudUploadOutlined />}
      />
    </Upload>
  );
};

export default App;
