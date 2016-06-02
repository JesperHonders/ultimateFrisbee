// const POLL_INTERVAL = 5000;
//
// Meteor.publish('polled-publication', function() {
//   const publishedKeys = {};
//
//   const poll = () => {
//     // Let's assume the data comes back as an array of JSON documents, with an _id field, for simplicity
//     const data = HTTP.get("https://api.leaguevine.com/v1/swiss_rounds/?tournament_id=19747&round_number=1&access_token=6fe6daa931");
//
//     data.forEach((doc) => {
//       if (publishedKeys[doc._id]) {
//         this.changed(resultsMen, doc._id, doc);
//       } else {
//         publishedKeys[doc._id] = true;
//         if (publishedKeys[doc._id]) {
//           this.added(resultsMen, doc._id, doc);
//         }
//       }
//     });
//   };
//
//   poll();
//   this.ready();
//
//   const interval = Meteor.setInterval(poll, POLL_INTERVAL);
//
//   this.onStop(() => {
//     Meteor.clearInterval(interval);
//   });
// });
