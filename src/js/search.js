const { db } = require('./db');

// Search by tags 
async function searchByTags(tags) {
    await db.any('SELECT user_id FROM user_tags WHERE tag_id = $1', [tags])
    .then(function(data) {
        console.log('Search by tags successful!');
        return data;
    }).catch(function(error) {
        console.log(error);
    })
}

module.exports = { 
    searchByTags
}