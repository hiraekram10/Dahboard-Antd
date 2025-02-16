import React from 'react';
import { DownOutlined,VideoCameraOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useNavigate } from 'react-router-dom';


const treeData = [
    {
        key: 'projects-menu',
        icon: <VideoCameraOutlined />,
        label: 'Projects',
        children: [
          {
            key: '/projects/list',
            label: 'Project List',
          },
          {
            key: '/projects/create',
            label: 'Project Create',
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