import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './SidebarRow.css';

function SidebarRow({selected, icon, title }) {
    return (
        <div className={`sidebar_row ${selected && 'selected'}`}>
            <span className="sidebarRow_icon">{icon}</span>
            <h2 className='sidebarRow_title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
