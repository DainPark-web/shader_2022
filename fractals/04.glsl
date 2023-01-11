#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;

void main(){
    vec2 st = 2.* gl_FragCoord.xy/u_resolution.xy - 1.;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);

    //mod return vec2 => length for downgrading
    color = vec3(length(mod(st, 0.5) - 0.25));
    


    gl_FragColor = vec4(color, 1.);
}