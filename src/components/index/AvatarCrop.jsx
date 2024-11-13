import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import PropTypes from "prop-types";

const AvatarCropper = ({ imageUrl, onCropComplete, onCancel }) => {
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [completedCrop, setCompletedCrop] = useState(null);

  // 裁剪完成后的处理
  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
    onCropComplete(crop);
  };

  // 点击取消时的处理
  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="relative items-center justify-center p-8 w-full h-screen bg-black rounded-lg shadow-lg">
      <div className="relative w-full max-w-xs">
        <ReactCrop
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={handleCropComplete}
          aspect={1} // 保持正方形裁剪
          minWidth={50} // 最小裁剪宽度
          minHeight={50} // 最小裁剪高度
          className="relative z-10" // 确保裁剪框位于图片之上
        >
          <img
            src={imageUrl}
            alt="Avatar"
            className="object-contain w-full h-auto mx-auto"
          />
        </ReactCrop>
      </div>

      <div className="mt-4 flex justify-between w-full max-w-xs">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          取消
        </button>
        <button
          onClick={() => {
            if (completedCrop) {
              // 这里可以处理裁剪后的图像
              console.log("裁剪完成:", completedCrop);
            }
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          确认裁剪
        </button>
      </div>
    </div>
  );
};

AvatarCropper.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onCropComplete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AvatarCropper;
