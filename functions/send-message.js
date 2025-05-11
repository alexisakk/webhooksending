const axios = require('axios');

exports.handler = async (event, context) => {
  const { message } = JSON.parse(event.body);

  const webhookUrl = 'https://discord.com/api/webhooks/1370727218883465327/YisEKi2palxzW3_IuB7aqMvG72dkBQ88Aw2N_GVyRTDJlCMvwES70pzpndULQYNibr0I'; // Replace with your actual webhook URL

  try {
    await axios.post(webhookUrl, { content: message });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send message' })
    };
  }
};
