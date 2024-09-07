import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Emoji = () => {
  return (
    <div>
      <div
        className="mt-2 overflow-auto transition-all"
        style={{ maxHeight: "200px" }} // 设置最大高度
      >
        <Picker
          data={data}
          onEmojiSelect={handleEmojiSelect}
          previewPosition="none"
          skinTonePosition="none"
          categories={["people", "nature", "foods", "activity"]}
          navPosition="none"
          searchPosition="none"
        />
      </div>
    </div>
  );
};
export default Emoji;
