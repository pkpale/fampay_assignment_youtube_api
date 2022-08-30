// results.items[0].snippet
// Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.
// .title, description, publishedAt, thumbnails(default,medium,high)(url,width,height), videoid

// width: 120,
//       height: 90
//     },
//     medium: {
//       url: 'https://i.ytimg.com/vi/44S-yKiWTzs/mqdefault.jpg',
//       width: 320,
//       height: 180
//     },
//     high: {
//       url: 'https://i.ytimg.com/vi/44S-yKiWTzs/hqdefault.jpg',
//       width: 480,
//       height: 360
//     }

const sqlite3 = require('sqlite3').verbose
