from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import calculate_spool_diameter

@api_view(['POST'])
def spool_diameter_view(request):
    try:
        t = float(request.data['webbing_thickness'])
        L = float(request.data['webbing_length'])
        d_inner = float(request.data['arbor_diameter'])

        d_outer, turns = calculate_spool_diameter(t, L, d_inner)

        return Response({
            'spool_outer_diameter': d_outer,
            'turns': turns
        })
    except (KeyError, ValueError) as e:
        return Response({'error': str(e)}, status=400)
