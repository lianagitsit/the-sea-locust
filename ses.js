// var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-east-1'});

// Create sendEmail params 
const params = {
    Destination: { /* required */
      // CcAddresses: [
      //   'EMAIL_ADDRESS',
      //   /* more items */
      // ],
      ToAddresses: [
      //   'coelomate@gmail.com',
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: "I have sent you this with the click of a motherfucking button on a web site."
        },
        Text: {
         Charset: "UTF-8",
         Data: "I have sent you this with the click of a motherfucking button on a web site."
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'Hello, Eric.'
       }
      },
    Source: 'liana.mancini@gmail.com', /* required */
    ReplyToAddresses: [
       'liana.mancini@gmail.com',
      /* more items */
    ],
  };
             
  // // Create the promise and SES service object
  // var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
  
  // // Handle promise's fulfilled/rejected states
  // sendPromise.then(
  //   function(data) {
  //     console.log(data.MessageId);
  //   }).catch(
  //     function(err) {
  //     console.error(err, err.stack);
  //   });
  
  module.exports = params;