import React from 'react'
import PropTypes from 'prop-types'

  
export default function foot({sex, name, avatarUrl}) {
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

// 属性验证
foot.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
}
