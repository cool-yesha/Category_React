import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              <CDBSidebarMenuItem icon="columns">Category</CDBSidebarMenuItem>
            </a>
        
            <a href="/MyCategoryDisplay"  className="text-decoration-none">
              <CDBSidebarMenuItem icon="table">MyCategory</CDBSidebarMenuItem>
            </a>
            <a href="/MyCategoryImageDisplay"  className="text-decoration-none">
              <CDBSidebarMenuItem icon="user">MyCategoryImage</CDBSidebarMenuItem>
            </a>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;