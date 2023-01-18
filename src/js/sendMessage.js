const { db } = require('./db');

// Add to messages table 
async function sendMessage(message_content, sender_id, receiver_id) {
    await db.none('INSERT INTO transactions (message_content, sender_id, receiver_id) VALUES ($1, $2, $3, $4, $5)', [message_content, sender_id, receiver_id])
    .then(function() {
        console.log('Message sent!');
    }).catch(function(error) {
        console.log(error);
    })
}

module.exports = {
    sendMessage
}