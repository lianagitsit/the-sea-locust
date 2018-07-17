
// Create sendEmail params 

module.exports = options => {
  const firstName = options.firstName;
  const email = options.email;

  const params = {
    Destination: { /* required */
      // CcAddresses: [
      //   'EMAIL_ADDRESS',
      //   /* more items */
      // ],
      ToAddresses: [
        /* more items */
        `${email}`
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
          Charset: "UTF-8",
          Data: `Dear ${firstName}, <br><br>Welcome to the course! I'm excited to get started.`
        },
        Text: {
          Charset: "UTF-8",
          Data: `Dear ${firstName}, Welcome to the course! I'm excited to get started.`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Welcome to TSL, ${firstName}!`
      }
    },
    Source: 'liana.mancini@gmail.com', /* required */
    ReplyToAddresses: [
      'liana.mancini@gmail.com',
      /* more items */
    ],
  };

  return params;
};