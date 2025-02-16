import React, { useState } from 'react';
import { Radio, Space, Table, Tag } from 'antd';
import './content.css'


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  }
];
const data = [
    {
      key: '1',
      name: 'John Brown',
      amount: 32,
      status: [ 'completed'],
    },
    {
      key: '2',
      name: 'Jim Green',
      amount: 42,
      status: ['fail'],
    },
    {
      key: '3',
      name: 'Joe Black',
      amount: 32,
      status: ['completed'],
    },
    {
      key: '4',
      name: 'Emily White',
      amount: 25,
      status: ['fail'],
    },
    {
      key: '5',
      name: 'Michael Smith',
      amount: 38,
      status: ['completed'],
    },
    {
      key: '6',
      name: 'Sarah Johnson',
      amount: 29,
      status: ['fail'],
    },
  ];
  
const TransactionCard = () => {

  return (
    <div className='trans-main'>
      
      <div>
        <h1>Latest Transaction</h1>
      </div>
      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
      />
    </div>
  );
};
export default TransactionCard;