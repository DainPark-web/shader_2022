#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#include "./utils.glsl"

// vec3 rect(vec2 st, vec2 loc, vec2 size){
//     vec2 sw = loc - size/2.;
//     vec2 ne = loc + size/2.;

//     vec2 pct = step(sw, st);
//     pct -= step(ne, st);


//     return vec3(pct.x * pct.y);
// }


void main(){
    vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec2 l = mod(st, 1.) - 0.2;
    float newl = length(mod(st, 0.5) - 0.2);
    st = l;

    st.x *= 2. * sin(u_time + newl);
    vec3 color = vec3(1.);

    color = rect(st, vec2(0.2), vec2(0.4));


    gl_FragColor = vec4(color, 1.);

}