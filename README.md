# PRODZ:API Server
______

This is a quick API Server using Node.js with Express and a couple of other stuff. 

prodz.me and the mobile app uses this API to gather all portfolio's items and details.

Example:

## Get All Items
```
GET /api/portfolio
```
* Headers: x-access-token
* Response:

```javascript
{
	"status": 200 | 400,
	"result": true | false,
	"response": Response | Error
}
```
#### Example:
```javascript
[
{
  "status" : 200,
  "result" : true,
  "response" : [
  {
 		"id": 1,
 		"title": "Yo Soy un Gamer",
 		"slug": "yo-soy-un-gamer-4",
 		"description": "Version 4.0 - Official App for YoSoyUnGamer.com. You can find news and information about the industry of video games, technology, mobile platforms (mobile and tablets), local entertainment and everything related to gaming in Puerto Rico. You can access the latest news, videos, events and share the news on your social networks.",
 		"img_filename": "ysug_v4.jpg",
 		"type": "mobile",
 		"links": {
 			"ios": "https://itunes.apple.com/us/app/yo-soy-un-gamer/id466301697?mt=8",
 			"android": "https://play.google.com/store/apps/details?id=com.lineartpr.ysugandroid&hl=es"
            }
  },   
         ... more results
]
```