import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected icon={<HomeIcon />} title="Home" />
            <SidebarRow icon={<WhatshotIcon />} title="Trending" />
            <SidebarRow icon={<SubscriptionsIcon />} title="Subscription" />
            <hr />
            <SidebarRow icon={<VideoLibraryIcon />} title="Library" />
            <SidebarRow icon={<HistoryIcon />} title="History" />
            <SidebarRow icon={<OndemandVideoIcon />} title="Your Videos"/>
            <SidebarRow icon={<WatchLaterIcon />} title="Watch Later"/>
            <SidebarRow icon={<ThumbUpAltOutlinedIcon />} title="Liked Videos"/>
            <SidebarRow icon={<ExpandMoreOutlinedIcon />} title="Show More"/>
            <hr />
        </div>
    )
}

export default Sidebar
