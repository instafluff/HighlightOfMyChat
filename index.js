try {
	require( "webwebweb" ).Run( 11899 );
} catch( error ) {
	if( error.code === "MODULE_NOT_FOUND" ) {
		console.error( "Make sure to run `npm install`" );
	}
	else {
		console.error( error );
	}
}
