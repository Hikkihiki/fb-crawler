'use strict';

module.exports.handler = function(event, context) {
  console.log(event);
  console.log(context);
  console.log('hi');
  var response = {
   message: 'Your Serverless function ran successfully via the \''
   + event.httpMethod
   + '\' method!'
 };

 return context.done(null, response);
};
