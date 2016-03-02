/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        from: {
            model: 'user',
        },
        
        to: {
            model: 'user',
        },
        
        time: {
            type: 'datetime',
        },
        
        content: {
            type: 'string',
        }
    }
};
