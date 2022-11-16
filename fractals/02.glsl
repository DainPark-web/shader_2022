#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#include "./utils.glsl"


void main(){
    vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(circle(st, vec2(0.), 0.5));

    gl_FragColor = vec4(color,1.);

}