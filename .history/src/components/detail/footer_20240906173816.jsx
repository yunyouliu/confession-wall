import React from 'react'
import {Footer} from 'antd-mobile'
export default function footer() {
  return (
    <div>
        <Footer
          label={
            <div>
              <HandPayCircleOutline /> 蚂蚁财富
            </div>
          }
        ></Footer>
    </div>
  )
}
