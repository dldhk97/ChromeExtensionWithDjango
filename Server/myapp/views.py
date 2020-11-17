import json

from django.shortcuts import render
from django.http import JsonResponse

# for Forbidden(CSRF cookie not set)
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

def do_something(json_array):
    return_data_array = []
    
    # open received json
    for json_obj in json_array:
        target_url = json_obj['url']
        print('Received URL : ' + target_url)

        # create return data
        data = {}
        data['message'] = 'OK, i got ' + target_url + '.'
        data['status'] = 'SUCCESSFUL'
        return_data_array.append(data)

    return return_data_array

@method_decorator(csrf_exempt, name='dispatch')
def get_analyzed_info(request):
    print('Request received from client')
    if request.method == 'POST':
        json_array = json.loads(request.body)

        # do something
        result = do_something(json_array)

        # send data to client 
        return JsonResponse(result, safe=False)
    else:
        return JsonResponse({'message': 'Server received GET request.', 'status': 'GET'})