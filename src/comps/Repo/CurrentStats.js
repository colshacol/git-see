import React from 'react'
import { Icon } from 'react-fa';
import './styles/CurrentStats.css'

export default function CurrentStats(props) {
  return (
    <div className='CurrentStats'>
      <div className='CurrentStat'>
        <Icon name='star' className='CurrentStatIcon'/>
         {props.currentStars}
      </div>
      <div className='CurrentStat'>
        <Icon name='code-fork' className='CurrentStatIcon'/>
         {props.currentForks}
      </div>
      <div className='CurrentStat'>
        <Icon name='eye' className='CurrentStatIcon'/>
         {props.currentWatchers}
      </div>
    </div>
  )
}
