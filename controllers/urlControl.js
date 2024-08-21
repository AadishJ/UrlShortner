const { nanoid } = require( "nanoid" );
const urlModel = require( "../models/urlModel" );
async function handlePostRequest ( req, res )
{
    const body = req.body;
    if ( !body || !body.url )
        res.status( 400 ).send( "Enter valid URL" );
    const url = req.body.url;
    const shortID = nanoid( 8 );
    await urlModel.create( {
        shortenUrl: shortID,
        redirectUrl: url,
        visitHistory: [ {} ],
    } )
    res.status( 200 ).send( `The shorten URL is ${ shortID }` );
}
async function handleGetRequest ( req, res )
{
    const surl = req.params.id;
    const reqUrl = await urlModel.findOne( { shortenUrl: surl } );
    if ( !reqUrl )
        res.status( 200 ).send( "Invalid URL" );
    reqUrl.visitHistory.push( Date.now() )
    await reqUrl.save();
    res.status( 200 ).redirect( reqUrl.redirectUrl );
}
module.exports = {
    handlePostRequest,
    handleGetRequest
}