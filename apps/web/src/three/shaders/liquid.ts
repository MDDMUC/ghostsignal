export const liquidVertexShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vUv = uv;
    vec3 p = position;

    float n = noise(uv * 6.0 + uTime * 0.15);
    float m = noise(uv * 12.0 - uTime * 0.22);
    p.z += (n * 0.55 + m * 0.25) * 0.35;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const liquidFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  float vignette(vec2 uv) {
    vec2 d = uv - 0.5;
    return smoothstep(0.8, 0.25, dot(d, d) * 1.35);
  }

  void main() {
    float t = 0.5 + 0.5 * sin(uTime * 0.35 + vUv.x * 6.2831);
    vec3 color = mix(uColorA, uColorB, t);
    float v = vignette(vUv);
    float alpha = 0.22 * v;
    gl_FragColor = vec4(color, alpha);
  }
`;

