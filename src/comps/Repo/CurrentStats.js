import React from 'react'
import { Icon } from 'react-fa';
import './styles/CurrentStats.css'

export default function CurrentStats(props) {
  console.log({ props })
  return (
    <div className='CurrentStats'>
      <div className='CurrentStat'>
        <Icon name='star' className='CurrentStatIcon'/>
         {props.stars}
      </div>
      <div className='CurrentStat'>
        <Icon name='code-fork' className='CurrentStatIcon'/>
         {props.forks}
      </div>
      <div className='CurrentStat'>
        <Icon name='eye' className='CurrentStatIcon'/>
         {props.watchers}
      </div>
    </div>
  )
}
