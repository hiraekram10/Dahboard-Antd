import React from 'react'
import { Card ,Progress,Col,Button} from 'antd'

const UserProCard = ({title,description,company,comments,resolved,issues,status,progress,img}) => {
  return (
    <Col className='user-col' xs={24} sm={24} md={12} lg={12} xl={12}>

      <Card  variant="borderless" className='card'>
        <div className='userc-main'>
          <div className='btn-container'>
          <Button >{status}</Button>
          </div>
          <div>
            <h4>{title}</h4>
          </div>
          <div className='company'>
            <img src={img} alt="" />
            {company}
          </div>
          <div>
            <p>
           {description}
            </p>
          </div>
          <div>
            <ul>
              <li>{issues}</li>
              <li>{resolved}</li>
              <li>{comments}</li>
            </ul>
          </div>
          <div>
            <img src="" alt="" />
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
