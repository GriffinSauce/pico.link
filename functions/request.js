/*

Input event:
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}

Return output:
{
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "body": "..."
}

*/

exports.handler = function(event, context, callback) {
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    // "headers": { "headerName": "headerValue", ... },
    body: JSON.stringify({
      hello: 'world',
    }),
  });
};
