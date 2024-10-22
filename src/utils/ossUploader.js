// ossUploader.js
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // 使用 uuid 生成唯一文件名

export const uploadToOss = async (file) => {
  try {
    console.log(file);

    const stsResponse = await axios.get("/oss/policy");
    const { policy, signature, dir, accessid, host } = stsResponse.data.data;

    // 使用 uuid 生成唯一文件名，保留原始扩展名
    const fileExtension = file.name.split(".").pop();
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const url = `${host}/${dir}/${uniqueFileName}`;

    const formData = new FormData();
    formData.append("key", `${dir}/${uniqueFileName}`);
    formData.append("OSSAccessKeyId", accessid);
    formData.append("policy", policy);
    formData.append("signature", signature);
    formData.append("success_action_status", "200");
    formData.append("file", file);

    const OSSResponse = await axios.post(host, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: undefined,
      },
      withCredentials: false,
    });

    if (OSSResponse.status === 200) {
      return url;
    } else {
      throw new Error("上传失败");
    }
  } catch (error) {
    console.error("上传文件失败:", error.message);
    return { error: "上传失败" };
  }
};
