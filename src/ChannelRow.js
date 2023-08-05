import React from 'react';
import { Avatar } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import './ChannelRow.css'

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow_logo' alt={channel} src={image} />
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleOutlinedIcon />}</h4>
                <p> {subs} subscribers .. {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
