# Hack Test API

Hackathons + Contests => Hack Test

**Website:** https://hacktestapi.herokuapp.com/

**Workspace:** https://www.postman.com/satellite-geoscientist-84411763/workspace/hacktest/collection/18446656-d9d6a99a-8ec4-4c8d-adae-149cf1bb1239?ctx=documentation

**Video:** https://youtu.be/N4EpjLnvJPk

<hr>

# REST API

- Hackathons
- Contests

# Hack Test API - Schema

- /hackathon

- /contests

    - > /codeforces
    - > /codeforces_gym
    - > /top_coder
    - > /code_chef
    - > /hacker_rank
    - > /hacker_earth
    - > /kick_start
    - > /leetcode

<hr>

# ⚒️ Tech Stack
<img src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E" alt="JavaScript logo" title="JavaScript" height="25" /><img src="https://img.shields.io/badge/MongoDB-282C34?logo=mongodb&logoColor=47A248" alt="MongoDB logo" title="MongoDB" height="25" /><img src="https://img.shields.io/badge/Node.js-282C34?logo=node.js&logoColor=339933" alt="Node.js logo" title="Node.js" height="25" /><img src="https://img.shields.io/badge/HTML5-282C34?logo=html5&logoColor=E34F26" alt="HTML5 logo" title="HTML5" height="25" /><img src="https://img.shields.io/badge/CSS3-282C34?logo=css3&logoColor=1572B6" alt="CSS3 logo" title="CSS3" height="25" /><img src="https://img.shields.io/badge/git-282C34?logo=git&logoColor=F05032" alt="git logo" title="git" height="25" /><img src="https://img.shields.io/badge/VS%20Code-282C34?logo=visual-studio-code&logoColor=007ACC" alt="Visual Studio Code logo" title="Visual Studio Code" height="25" /><img src="https://img.shields.io/badge/Express-282C34?logo=express&logoColor=FFFFFF" alt="Express.js logo" title="Express.js" height="25" />
<hr>

## Schema - Hackathons

### `GET` list of Hackathons
Request

`GET /hackathon`

Response (Example)

{

    "\_id": "61f3a163107f3e6a55f8eb74",

    "id": 13952,
    
    "title": "Flutter Puzzle Hack ",
    
    "open_state": "open",
    
    "thumbnail_url": "//challengepost-s3-challengepost.
    netdna-ssl.com/photos/production/challenge_thumbnails/001/783/623/datas/medium.png",
    
    "analytics_identifier": "Flutter Puzzle Hack (13952)",
    
    "url": "https://flutterhack.devpost.com/",
    
    "time_left_to_submission": "about 1 month left",
    
    "submission_period_dates": "Jan 06 - Feb 28, 2022",
    
    "prize_amount": "$<span data-currency-value>51,046</span>",
    
    "registrations_count": 4012,
    
    "featured": false,
    
    "organization_name": "Google",
    
    "winners_announced": false,
    
    "submission_gallery_url": "https://flutterhack.devpost.com/project-gallery",
    
    "start_a_submission_url": "about 1 month left",
    "invite_only": false,
    
    "\_\_v": 0

}

### `POST` a new Hackathon

Request

`POST /hackathon`

Response

{
    
    "title": "Your Hackathon Title",
    
    "open_state" : "Hackathon status",

    "thumbnail_url": "images://hackathon_logo.png",

    "analytics_identifier" : "Your Hackathon",

    "url" : "https://yourhackathonurl.com/",

    "time_left_to_submission" : "about 2 hrs left",

    "prize_amount" : "$$$$$",

    "registrations_count" : "150",

    "featured" : "true/false",

    "organization_name" : "Hosting Organisation (Postman)"

    "winners_announced" : "true/false"
    
    "submission_gallery_url" : "https://yourhackathonurl.com/submissions",

    "start_a_submission_url" : about 30 mins left",

    "invite_only" : "true/false",

    "__v" : "0/1/2"
}

### Get a specific Hackathon

Request

`GET /hackathon/id`

Response Example

{

    "\_id": "61f3a163107f3e6a55f8eb74",

    "id": 13952,
    
    "title": "Flutter Puzzle Hack ",
    
    "open_state": "open",
    
    "thumbnail_url": "//challengepost-s3-challengepost.
    netdna-ssl.com/photos/production/challenge_thumbnails/001/783/623/datas/medium.png",
    
    "analytics_identifier": "Flutter Puzzle Hack (13952)",
    
    "url": "https://flutterhack.devpost.com/",
    
    "time_left_to_submission": "about 1 month left",
    
    "submission_period_dates": "Jan 06 - Feb 28, 2022",
    
    "prize_amount": "$<span data-currency-value>51,046</span>",
    
    "registrations_count": 4012,
    
    "featured": false,
    
    "organization_name": "Google",
    
    "winners_announced": false,
    
    "submission_gallery_url": "https://flutterhack.devpost.com/project-gallery",
    
    "start_a_submission_url": "about 1 month left",
    "invite_only": false,
    
    "\_\_v": 0
    
}

### Change a Hackthon Status

Request

`PUT /hackathon?id="id"/`

Response

{

    "featured": true,

}

### Create another new Hackathon

Request

`POST /hackathon?id="id"`

Repsonse

{
    
    "id" : "your_new_id"

}

### Delete a Hackathon

Request

`DELETE /hackaton?id="id"`

Response

{

    Item Deleted Successfully

}

## Schema - Contests

### `GET` list of Contests
Request

`GET /contests`

Response (Example)

{

    "_id": "233fa6cd-787e-468f-90f6-693c4dede569",
    
    "name": "ProjectEuler+",
    
    "url": "https://hackerrank.com/contests/projecteuler",
    
    "start_time": "2014-07-07T15:38:00.000Z",
    
    "end_time": "2024-07-30T18:30:00.000Z",
    
    "duration": "317616720.0",
    
    "in_24_hours": "No",
    
    "status": "CODING",
    
    "__v": 0

}

### `POST` a new Contest

Request

`POST /contests`

Response

{
    
    "name": "your_contest_name",
    
    "url": "https://contest.xyz/contests/your_contest_name",
    
    "start_time": "20XX-XX-XXT00:00:00.000Z",
    
    "end_time": "20XX-XX-XXT00:00:00.000Z",
    
    "duration": "contes_time",
    
    "in_24_hours": "Yes/No",
    
    "status": "CODING",
    
    "__v": 0/1/2

}

### Get a specific Contest

Request

`GET /contests/id`

Response Example

{

    "_id": "233fa6cd-787e-468f-90f6-693c4dede569",
    
    "name": "ProjectEuler+",
    
    "url": "https://hackerrank.com/contests/projecteuler",
    
    "start_time": "2014-07-07T15:38:00.000Z",
    
    "end_time": "2024-07-30T18:30:00.000Z",
    
    "duration": "317616720.0",
    
    "in_24_hours": "No",
    
    "status": "CODING",
    
    "__v": 0

}

### Change a Contest Status

Request

`PUT /contests?_id="id"/`

Response

{

    "featured": Yes,

}

### Create another new Contest

Request

`POST /contests?id="id"`

Repsonse

{
    
    "id" : "your_new_id"

}

### Delete a Contest

Request

`DELETE /contests?id="id"`

Response

{

    Item Deleted Successfully

}
