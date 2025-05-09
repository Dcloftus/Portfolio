import math

import math

def calculate_spool_diameter(webbing_thickness, webbing_length, arbor_diameter):
    t = webbing_thickness
    L = webbing_length
    d_inner = arbor_diameter

    total_length = 0
    layer = 0
    while total_length < L:
        d_layer = d_inner + 2 * t * layer
        length_this_layer = math.pi * d_layer
        total_length += length_this_layer
        layer += 1

    d_outer = d_inner + 2 * t * layer
    return round(d_outer, 2), layer