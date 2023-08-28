{*/ Here is code */}
import React, { useState } from 'react';

const Dashboard = () => {
  const [showDashboardOptions, setShowDashboardOptions] = useState(false);
  const [showSchoolManagementOptions, setShowSchoolManagementOptions] = useState(false);

  const toggleDashboardOptions = () => {
    setShowDashboardOptions(!showDashboardOptions);
    setShowSchoolManagementOptions(false);
  };

  const toggleSchoolManagementOptions = () => {
    setShowSchoolManagementOptions(!showSchoolManagementOptions);
    setShowDashboardOptions(false);
  };
  const menuStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    color: 'black',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const submenuStyle = {
    display: 'grid',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };
   const schoolManagementIconStyle = {
    // Style for the School Management icon
    marginRight: '10px',
    fontSize: '20px',
    backgroundColor:'Red' // Add font size
  };


  return (
    <div>
      {/* Dashboard & School Management Menu */}
      <div  style={menuStyle}>
        <span >📊</span> Dashboard
      </div>

      <div  onClick={toggleSchoolManagementOptions} style={menuStyle}>
        <span style={iconStyle}>🏫</span> School Management...
      </div>

      {/* Student Dashboard & School Management Options */}
      {showDashboardOptions && (
        <div style={submenuStyle}>
          {/* Empty submenu, no options */}
        </div>
      )}

      {showSchoolManagementOptions && (
        <div style={submenuStyle}>
          <div style={menuStyle}>
            <span style={iconStyle}>👩‍🎓</span> Students
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>👨‍🏫</span> Teachers
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>🏢</span> Classes
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>📜</span> Syllabus
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>📋</span> Attendance
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>🎉</span> Events
          </div>
          <div style={menuStyle}>
            <span style={iconStyle}>📌</span> Notice Board
          </div>
        </div>
      )}

      {/* Career Counseling */}
      <div style={menuStyle}>
        <span style={iconStyle}>💼</span> Career Counseling
      </div>
      {/* 360 Evaluation  */}
      <div style={menuStyle}>
        <span style={iconStyle}>🔄</span> 360 Evaluation
      </div>

      {/* Fee Payment */}
      <div style={menuStyle}>
        <span style={iconStyle}>💰</span> Fee Portal
      </div>

      {/* Cources */}
       <div style={menuStyle}>
        <span style={iconStyle}>📚</span> Cources
      </div>

      {/* admission */}
       <div style={menuStyle}>
        <span style={iconStyle}>🎓</span> Admission
      </div>
      {/* chat*/}
       <div style={menuStyle}>
        <span style={iconStyle}>💬</span> Chat
      </div>
      {/*notification */}
       <div style={menuStyle}>
        <span style={iconStyle}>🔔</span>notification
      </div>
    </div>
   
  );
  
};

export default Dashboard;
