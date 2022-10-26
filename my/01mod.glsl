#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
   vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
   st.x *= u_resolution.x/u_resolution.y;


   vec3 coord;
   float l = length(mod(st, 1.) -0.1);
   coord = vec3(l);


    gl_FragColor = vec4(coord,1.0);
}