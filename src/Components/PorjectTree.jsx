import React from 'react';
import { DownOutlined,VideoCameraOutlined,FundProjectionScreenOutlined ,CaretRightOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useNavigate } from 'react-router-dom';


const treeData = [
    {
        key: 'projects-menu',
        label: 'Projects',
        children: [
          {
            key: '/projects/list',
            label: 'Project List',
            icon:<CaretRightOutlined />
          },
          {
            key: '/projects/create',
            label: 'Project Create',
            icon:<CaretRightOutlined />
          },
        ],
      }
  ];
const ProjectTree = () => {
    const navigate = useNavigate()

    const onSelect = (selectedKeys, { node }) => {
        console.log('Selected node:', node);
        
        // Ensure we're navigating only if it's a leaf node (not the parent 'Projects')
        if (node.key && node.key.startsWith('/')) {
          navigate(node.key);
        }
      };

  return (
    <Tree
   
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandAll
      onSelect={onSelect}
      treeData={treeData}
    
    />
  );
};

export default ProjectTree;