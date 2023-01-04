
// GL_ES : Embedded system for Web => Same API for all OS
#ifdef GL_ES 
precision highp float;
#endif  


uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

const float PI = 3.14159;
const float minY = -3.0;
const float maxY = 3.0;
const float minX = -3.;
const float maxX = 3.;
const int interation = 500;



void main() {
    // vec2 st = vec2(maxX - minX) * gl_FragCoord.xy/u_resolution.xy - 1.;
    vec2 st = 2. * gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec2 mouse = 2. * u_mouse.xy/u_resolution.xy;
    // mouse.x *= u_resolution.x/u_resolution.y;
    // st *= .5;
    float angle = PI * sin(u_time * 0.5) * st.x;
    float ca = -0.8;
    // float ca = sin(u_time) * 0.5 - 0.5;
    float cb = 0.8; 

    vec2 center = vec2(0.);
    vec2 z = center - st * mouse.x;


    float n = 0.;

    for(int i = interation; i > 0; i--){
        float a = z.x;
        float b = z.y;
        float aa = a * a;
        float bb = b * b;
        float twoabi = 2. * a * b;

        //정지 
        if(aa + bb > 4.){
            n = float(i) / float(interation);
            break;
        }

        z = vec2((aa - bb)+ ca * sin(angle), twoabi + cb * cos(angle) );


    }

    float r = 0.5 + cos(n * 154.) / 2.0 * st.x * 3.;
    float g = 0.5 + sin(n * 86.) / 2.0 * st.y * 4.;
    float b = 0.5 + cos(n * 50.) / 2. * length(vec2(0.5)) * 2.;
  
    gl_FragColor = vec4(vec3(r,g,b) ,1.);
}