import React from 'react'


const data = [
    {
      description: "[看]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211607559dcc9ca9a.png",
    },
    {
      description: "[流泪]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211601408cebcaa10.png",
    },
    {
      description: "[求求了]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142716823ee1a7199.png",
    },
    {
      description: "[猪头]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211605253f12c17c3.png",
    },
    {
      description: "[偷笑]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/1823354067401bf7445.png",
    },
    {
      description: "[送心]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/242116223295fc5d347.png",
    },
    {
      description: "[躺平]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/08/14142718335e95f861e.png",
    },
    {
      description: "[宕机]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/09/182335428430e299cc3.png",
    },
    {
      description: "[尬笑]",
      url: "https://wxpublic-1251448646.file.myqcloud.com/public/common/files/2023/07/24211532837e07cb990.png",
    },
  ];
  
export default function foot() {
  return (
    <div className="flex items-center mt-4">
    <img src={avatarUrl} className="rounded-full w-6 h-6" alt="avatar" />
    <span className="mt-2 ml-1">{name}</span>
    <SexIcon className="mt-[11px] ml-1" sex={sex} />
    <SvgIcon iconName="bianji" className="mt-[11px] ml-1" />
    <div className="ml-auto flex items-center h-2">
      <Checkbox
        checked={checked}
        onClick={() => setChecked(!checked)}
        className="mt-1"
      >
        <span className="text-sm text-gray-500 ml-[-4px]">
          {checked ? "已匿名" : "可匿名"}
        </span>
      </Checkbox>
      <Button color="success" className="rounded-3xl h-8 ml-2 px-4">
        评论
      </Button>
    </div>
  </div>
  )
}
