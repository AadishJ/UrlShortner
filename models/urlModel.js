const mongoose = require( "mongoose" );

const url = mongoose.Schema( {
    shortenUrl: {
        type: String,
    },
    redirectUrl: {
    },
    visitHistory: [Date],
},{timestamps: true} );
const urlModel = mongoose.model( "urlModel", url );
module.exports = urlModel;