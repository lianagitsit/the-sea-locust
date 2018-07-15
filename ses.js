
// Create sendEmail params 
const params = {
    Destination: { /* required */
      // CcAddresses: [
      //   'EMAIL_ADDRESS',
      //   /* more items */
      // ],
      ToAddresses: [
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

  module.exports = params;