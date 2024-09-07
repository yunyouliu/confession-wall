import React from 'react'
import {Footer,Button} from 'antd-mobile'
export default function footer() {
  return (
    <div>

      <Button></Button>
        <Footer
          label={
            <div className='fixed bottom-0'>
               蚂蚁财富
            </div>
          }
        ></Footer>
    </div>
  )
}
