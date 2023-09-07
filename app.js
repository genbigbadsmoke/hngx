const express = require('express')
const app = express()


var date_time = new Date();

app.get('/intern', (req, res) => {
  return res.json({
       slack_name: req.query.slack_name,
       'current_day': 'Thursday',
       'utc_time': date_time,
       track: req.query.track,
       'age': 25,
       'github_file_url': 'https://github.com/genbigbadsmoke/hngx/blob/main/app.js',
       'github_repo_url': 'https://github.com/genbigbadsmoke/hngx',
       'status_code': 200
   })
})

app.listen(3000)