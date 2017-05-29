import React from 'react'
import css from './styles/StatRow.styl'

export default ({
  timeFrame,
  watchers,
  stars,
  forks
}) => {
  return (
    <div className={css.RepoStatRow}>
      <p className={css.RepoRowTimeframe}>{timeFrame}</p>
      <p className={css.RepoRowStat}>{stars}</p>
      <p className={css.RepoRowStat}>{forks}</p>
      <p className={css.RepoRowStat}>{watchers}</p>
    </div>
  );
}
