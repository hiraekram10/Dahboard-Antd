import React from 'react'

import './utls.css'
import './responsive.css'

import {
    SettingOutlined,
    ShoppingCartOutlined,
    UnorderedListOutlined,
    CustomerServiceOutlined,
    FormatPainterOutlined
} from '@ant-design/icons'

const FixedSideCard = () => {
    return (
        <div className='sideCard-main'>
            <div className='sCardIcon' data-icons='quick options' >
                <SettingOutlined  className='scardi' spin />
            </div>
            <div className='sCardIcon' data-icons='Buy now'>
                <ShoppingCartOutlined className='scardi'  />
            </div>
            <div className='sCardIcon' data-icons='Document'><UnorderedListOutlined  className='scardi'/></div>
            <div className='sCardIcon' data-icons='Check '><CustomerServiceOutlined className='scardi' /></div>
            <div className='sCardIcon' data-icons='Support'>
                <FormatPainterOutlined  className='scardi'/>
            </div>
        </div>
    )
}

export default FixedSideCard
