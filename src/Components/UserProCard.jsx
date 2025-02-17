import React from 'react'
import { Card ,Progress,Col,Button} from 'antd'

const UserProCard = ({title,description,company,comments,resolved,issues,status,progress,img}) => {
  return (
    <Col className='user-col' xs={24} sm={24} md={12} lg={12} xl={12}>

      <Card  variant="borderless" className='card cardblue'>
        <div className='userc-main'>
          <div className='btn-container'>
          <Button >{status}</Button>
          </div>
          <div className='title'>
            <h2>{title}</h2>
          </div>
          <div className='company'>
            <img src={img} alt="" />
         <span>  {company}</span> 
          </div>
          <div className='description'>
            <p>
           {description}
            </p>
          </div>
          <div className='card-list'>
            <ul>
              <li><span>issues</span>{issues}</li>
              <li><span>resolved</span>{resolved}</li>
              <li><span>comments</span> {comments}</li>
            </ul>
          </div>
          <div className='images'>
            <img src="https://admin.pixelstrap.net/riho/assets/images/user/3.jpg" alt="" />
            <img src="https://admin.pixelstrap.net/riho/assets/images/user/5.jpg" alt="" />
            <img src="https://admin.pixelstrap.net/riho/assets/images/user/1.jpg" alt="" />
            <span> + More...</span>
          </div>
          <div>
          <Progress percent={progress} status="active"  strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}/>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default UserProCard
