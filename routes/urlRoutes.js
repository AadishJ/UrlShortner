const express = require( "express" );
const { handlePostRequest, handleGetRequest } = require("../controllers/urlControl")
const router = express.Router();

router
    .route( "/" )
    .post( ( req, res ) => handlePostRequest( req, res ) )
router
    .route("/:id")
    .get( ( req, res ) => handleGetRequest( req, res ) )
module.exports = router