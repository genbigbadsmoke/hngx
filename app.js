const express = require('express')
const app = express()


app.get('/intern', (req, res) => {
  return res.json({
    slack_name: req.query.slack_name,
    'current_day': 'Thursday',
    'utc_time': new Date().toISOString().split('.')[0]+'Z',
    track: req.query.track,
    'age': 25,
    'github_file_url': 'https://github.com/genbigbadsmoke/hngx/blob/main/app.js',
    'github_repo_url': 'https://github.com/genbigbadsmoke/hngx',
    'status_code': 200,
  });
})

app.listen(3000)