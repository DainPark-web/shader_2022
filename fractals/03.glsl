
// GL_ES : Embedded system for Web => Same API for all OS
#ifdef GL_ES 
precision highp float;
#endif  


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

const float minY = -1.0;
const float maxY = 1.0;
const float minX = -1.5;
const float maxX = 1.5;


void main() {
    vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(length(vec2(st.x,st.y)));
    color.x *= st.x * length(st.y) * sin(st.x* u_time) * 9.;
   

 
  
    gl_FragColor = vec4(0.1/color,u_time);
}