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

const mockRequest = {
  requester: {
    name: 'Peter',
  },
  description: 'Boat trip pictures',
  slug: 'af18e1eb-0d93-43e9-9b0f-44234415b0a0',
  media: [],
};

exports.handler = function(event, context, callback) {
  if (event.httpMethod === 'POST') {
    callback(null, {
      headers:
        process.env === 'production'
          ? {}
          : {
              'Access-Control-Allow-Origin': '*',
            },
      statusCode: 200,
      body: JSON.stringify({
        request: mockRequest,
      }),
    });
  }

  if (event.httpMethod === 'GET') {
    callback(null, {
      headers:
        process.env === 'production'
          ? {}
          : {
              'Access-Control-Allow-Origin': '*',
            },
      statusCode: 200,
      body: JSON.stringify({
        request: mockRequest,
      }),
    });
  }

  callback(null, {
    statusCode: 404,
  });
};