// ShaderBackground.js
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TextureMesh = () => {
  const mesh = useRef(null);

  useFrame((state) => {
    const { clock, mouse, gl } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      const c = gl.domElement.getBoundingClientRect();
      mesh.current.material.uniforms.u_resolution.value = [c.width, c.height];
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]}>
      <planeGeometry args={[1024, 1024]} />
      <shaderMaterial
        fragmentShader={`
          uniform vec2 u_resolution;
          uniform vec2 u_mouse;
          uniform float u_time;
          uniform vec3 u_color;
          uniform float u_size;
          uniform float u_factor;
          uniform float u_gain;
          uniform float u_jitter;
          uniform int u_octaves;
          uniform float u_phase;
          uniform float u_lacunarity;
          uniform float u_aa_passes;

          uint ihash1D(uint q) {
              q = (q << 13u) ^ q;
              return q * (q * q * 15731u + 789221u) + 1376312589u;
          }

          uvec4 ihash1D(uvec4 q) {
              q = (q << 13u) ^ q;
              return q * (q * q * 15731u + 789221u) + 1376312589u;
          }

          float hash1D(vec2 x) {
              uvec2 q = uvec2(x * 65536.0);
              q = 1103515245u * ((q >> 1u) ^ q.yx);
              uint n = 1103515245u * (q.x ^ (q.y >> 3u));
              return float(n) * (1.0 / float(0xffffffffu));
          }

          vec2 hash2D(vec2 x) {
              uvec4 q = uvec2(x * 65536.0).xyyx + uvec2(0u, 3115245u).xxyy;
              q = 1103515245u * ((q >> 1u) ^ q.yxwz);
              uvec2 n = 1103515245u * (q.xz ^ (q.yw >> 3u));
              return vec2(n) * (1.0 / float(0xffffffffu));
          }

          vec3 voronoi(vec2 pos, vec2 scale, float jitter, float phase, float seed) {
              const float kPI2 = 6.2831853071;
              pos *= scale;
              vec2 i = floor(pos);
              vec2 f = pos - i;

              vec2 minPos;
              float minDistance = 1e+5;
              for (int y = -1; y <= 1; y++) {
                  for (int x = -1; x <= 1; x++) {
                      vec2 n = vec2(float(x), float(y));
                      vec2 cPos = hash2D(mod(i + n, scale) + seed) * jitter;
                      cPos = 0.5 * sin(phase + kPI2 * cPos) + 0.5;
                      vec2 rPos = n + cPos - f;

                      float d = dot(rPos, rPos);
                      if (d < minDistance) {
                          minDistance = d;
                          minPos = rPos;
                      }
                  }
              }
              return vec3(minDistance);
          }

          vec4 fbmVoronoi(vec2 pos, vec2 scale, int octaves, float shift, float timeShift, float gain, float lacunarity, float octaveFactor, float jitter, float interpolate, float seed) {
              float amplitude = gain;
              vec2 p = pos * scale;
              vec4 value = vec4(0.0);
              for (int i = 0; i < octaves; i++) {
                  vec3 v = voronoi(p / scale, scale, jitter, timeShift, seed);
                  v.x = v.x * 2.0 - 1.0;
                  value += amplitude * vec4(mix(v.x, v.x, interpolate), vec3(1.0));
                  p *= lacunarity;
                  amplitude *= gain;
              }
              value.x = value.x * 0.5 + 0.5;
              return value;
          }

          void main() {
              vec2 uv = gl_FragCoord.xy / u_resolution.x;
              vec2 p = fract(uv);
              vec2 scale = vec2(int(u_resolution.x / u_size / 8.0));

              vec4 value = fbmVoronoi(p, scale, u_octaves, 0.0, u_phase, u_gain, u_lacunarity, u_factor, u_jitter, 0.0, 0.0);
              gl_FragColor = vec4(u_color, value.x);
          }
        `}
        vertexShader={`
          void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        // TODO: Ensure uniform values are to client satisfaction
        uniforms={{
          u_size: { value: 20 },
          u_octaves: { value: 2 },
          u_phase: { value: 1 },
          u_lacunarity: { value: 3.6 },
          u_gain: { value: 1.5 },
          u_jitter: { value: 0.2 },
          u_factor: { value: 0 },
          u_aa_passes: { value: 2 },
          u_color: { value: new THREE.Vector3(0.482, 0.624, 0.624) },
          u_time: { value: 0 },
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [window.innerWidth, window.innerHeight] },
        }}
      />
    </mesh>
  );
};

const ShaderBackground = () => {
  return (
    <div className="shader-bg">
      <Canvas
        gl={{
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
          alpha: true,
          antialias: true,
          precision: 'highp',
          powerPreference: 'high-performance',
        }}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
        resize={{ debounce: 0, scroll: false, offsetSize: true }}
        dpr={1}
        style={{ height: '100%', width: '100%' }}
      >
        <TextureMesh />
      </Canvas>

      <style jsx>{`
        .shader-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: rgba(123, 159, 159, 0.2);
        }
        canvas {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default ShaderBackground;
