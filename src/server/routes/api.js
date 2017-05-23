const fs = require('fs');
const router = require("express").Router();

router.get("/v1/repo/:owner/:repo", (req, res) => {
  console.log('\n\n\nPARAMS\n\n\n', req.params.owner, req.params.repo)
  fs.readFile('repos.json', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    else {
      const repo = JSON.parse(data).find(repo => {
        return repo.repo === req.params.owner + '/' + req.params.repo;
      });
      console.log(repo)
      repo.currentStats = repo.history[repo.history.length -1];
      const dayHistory = repo.history.slice(repo.history.length - 2);
      const weekHistory = repo.history.slice(repo.history.length - 7);
      const monthHistory = repo.history.slice(repo.history.length - 30);
      const starAverage = Math.ceil((repo.history[repo.history.length - 1].stars - repo.history[0].stars) / (repo.history.length));
      const forkAverage = Math.ceil((repo.history[repo.history.length - 1].forks - repo.history[0].forks) / (repo.history.length));
      const watcherAverage = Math.ceil((repo.history[repo.history.length - 1].watchers - repo.history[0].watchers) / (repo.history.length));
      console.log(starAverage, forkAverage, watcherAverage)
      repo.averages = {
          stars: starAverage,
          forks: forkAverage,
          watchers: watcherAverage
      }
      
      if (repo.history.length < 1) {
        repo.yesterday = repo.pastWeek = repo.pastMonth = {
          stars: 'n/a',
          forks: 'n/a',
          watchers: 'n/a',
        }
      } else if (repo.history.length < 7) {
        repo.yesterday = {
          stars: dayHistory[1].stars - dayHistory[0].stars,
          forks: dayHistory[1].forks - dayHistory[0].forks,
          watchers: dayHistory[1].watchers - dayHistory[0].watchers,
        }
        repo.pastWeek = repo.pastMonth = {
          stars: 'n/a',
          forks: 'n/a',
          watchers: 'n/a',
        }
      } else if (repo.history.length < 30) {
        repo.yesterday = {
          stars: dayHistory[1].stars - dayHistory[0].stars,
          forks: dayHistory[1].forks - dayHistory[0].forks,
          watchers: dayHistory[1].watchers - dayHistory[0].watchers,
        }
        repo.pastWeek = {
          stars: weekHistory[6].stars - weekHistory[0].stars,
          forks: weekHistory[6].forks - weekHistory[0].forks,
          watchers: weekHistory[6].watchers - weekHistory[0].watchers,
        }
        repo.pastMonth = {
          stars: 'n/a',
          forks: 'n/a',
          watchers: 'n/a',
        }
      } else {
        repo.yesterday = {
          stars: dayHistory[1].stars - dayHistory[0].stars,
          forks: dayHistory[1].forks - dayHistory[0].forks,
          watchers: dayHistory[1].watchers - dayHistory[0].watchers,
        }
        repo.pastWeek = {
          stars: weekHistory[6].stars - weekHistory[0].stars,
          forks: weekHistory[6].forks - weekHistory[0].forks,
          watchers: weekHistory[6].watchers - weekHistory[0].watchers,
        }
        repo.pastMonth = {
          stars: monthHistory[29].stars - monthHistory[0].stars,
          forks: monthHistory[29].forks - monthHistory[0].forks,
          watchers: monthHistory[29].watchers - monthHistory[0].watchers,
        }
      }



      res.send(repo)
    }
  })
});

router.get("/v1", (req, res) => {
  res.send("got /api/v1!");
});

router.get('/v1/repos', (req, res) => {
  res.send(fs.readFileSync('repos.json', 'utf8'));
});

module.exports = router;
