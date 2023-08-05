import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage_filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
          image="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
          channel="Akshay Sonawane"
          verified
          subs="1M"
          noOfVideos="382"
          description="hvfg nvdsdsdbvgdfhjgbh bdfvbdsfdsh fjamghfjesfkndshfbdvzsjcsdfsbfnsajdksfbjh"
        />
        <hr />
        <VideoRow 
          views="1.4M"
          subs="7M"
          description="dbhvsm,ajdfhdkbcfmfthjgtrrkdrl fd hfhy  regrth ty td rth tyyj try tfhth dyt t yr yty jtr yrt h tyj"
          timestamp="1 min ago"
          channel="WeCode"
          title="Youtube Clone in 4 hours"
          image="https://tse1.mm.bing.net/th?id=OIP.X_xDiRPG5oal1PW0vODoCgHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114"
        />
    </div>
  )
}

export default SearchPage
