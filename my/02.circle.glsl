#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#include "./utils.glsl"

// float circle(vec2 st, vec2 loc, float r){
//     float l = distance(st, loc);
//     // float l = step(distance(st, loc), r);
//     // return l; 


//     l = smoothstep(r, r + 0.2 ,l );

//     return l;
// }




void main(){
    vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    vec3 circleo = vec3(circle(st, vec2(0.), 0.5));

    color = min(vec3(circleo.x / 0.5, mix(circleo.y, 0.1, 0.9), circleo.z), vec3(circle(st, vec2(0.4, sin(u_time)), 0.5)));
    // color = vec3(length(st));


    gl_FragColor = vec4(color,1.);
}