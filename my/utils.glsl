vec3 rect(vec2 st, vec2 loc, vec2 size){
    vec2 sw = loc - size/2.;
    vec2 ne = loc + size/2.;

    vec2 pct = step(sw, st);
    pct -= step(ne, st);


    return vec3(pct.x * pct.y);
}

float circle(vec2 st, vec2 loc, float r){
    float l = distance(st, loc);
    // float l = step(distance(st, loc), r);
    // return l; 


    l = smoothstep(r, r + 0.2 ,l );

    return l;
}
