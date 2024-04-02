# submit_story.py

import json

# Handle POST request
def handle_post(request):
    # Get the JSON data from the request
    data = json.loads(request.data)
    
    # Here you can process the data as needed, such as storing it in a database
    # For now, let's just print the data
    print(data)
    
    # Respond with a success message
    return "Success"

# Main function to handle requests
def application(environ, start_response):
    status = '200 OK'
    headers = [('Content-type', 'text/plain; charset=utf-8')]
    
    # Check the request method
    if environ['REQUEST_METHOD'] == 'POST':
        # Get the request data
        request_body_size = int(environ.get('CONTENT_LENGTH', 0))
        request_body = environ['wsgi.input'].read(request_body_size)
        
        # Call the function to handle the POST request
        response_body = handle_post(request_body)
    else:
        # If method is not POST, return an error message
        response_body = "Method not allowed"
    
    # Send the response
    start_response(status, headers)
    return [response_body.encode()]
