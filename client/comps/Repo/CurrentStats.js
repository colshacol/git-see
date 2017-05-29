import React from 'react'
import { Icon } from 'react-fa';
import css from './styles/CurrentStats.styl'

export default function CurrentStats(props) {
  console.log({ props })
  return (
    <div className={css.CurrentStats}>
      <div className={css.CurrentStat}>
        <Icon name='star' className={css.CurrentStatIcon}/>
         {props.stars}
      </div>
      <div className={css.CurrentStat}>
        <Icon name='code-fork' className={css.CurrentStatIcon}/>
         {props.forks}
      </div>
      <div className={css.CurrentStat}>
        <Icon name='eye' className={css.CurrentStatIcon}/>
         {props.watchers}
      </div>
    </div>
  )
}
