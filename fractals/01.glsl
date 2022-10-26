#ifdef GL_ES
precision mediump float;
#endif

//u_resolution : window Diemension
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float r = 0.;
float g = 0.5;
float b = 0.;

vec2 dain = vec2(1., 0.5);
vec3 color = vec3(0.1255, 0.4824, 0.7373);




void main() {
   vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
   st.x *= u_resolution.x/u_resolution.y;
   vec2 mouse = 2. * gl_FragCoord.xy/u_mouse.xy - 1.;


   for(float i = 0.; i < 0.4; i+= 0.1){
    st.x += st.y * 1.;
   }

    gl_FragColor = vec4(vec3(mouse.x), 1.0);
}