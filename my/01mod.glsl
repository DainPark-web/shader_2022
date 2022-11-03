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
   st.x = st.x * 3. + st.x/3. * sin(st.x * 1.) * 2.;
   float l = length(mod(st, .5) - 0.25);
   coord = vec3(pow(l * 4., 2.));


    gl_FragColor = vec4(0.01/coord,1.0);
}