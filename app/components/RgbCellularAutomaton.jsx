'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function RGBGameOfLifeGame() {
  const canvasRef = useRef(null);

  // UI State for the user to know what's selected
  const [activeTool, setActiveTool] = useState('R');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL2
    const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true });
    if (!gl) return;

    // --- SHADER SOURCES ---

    const vsSource = `#version 300 es
    in vec4 position;
    void main() { gl_Position = position; }
    `;

    const fsHeader = `#version 300 es
    precision highp float;
    uniform vec3 iResolution;
    uniform float iTime;
    uniform int iFrame;
    uniform vec4 iMouse;
    uniform sampler2D iChannel0;

    // Custom Uniforms
    uniform bool uPaused;
    uniform bool uStep;
    uniform bool uKeyR;
    uniform bool uKeyG;
    uniform bool uKeyB;
    uniform bool uKeyE;

    out vec4 fragColor;
    `;

    // 1. Image Pass (Displays the buffer AND the Mouse Cursor)
    const codeImage = `
    #define CELL_SIZE 5.0
    
    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = fragCoord / iResolution.xy;
        vec3 col = texture(iChannel0, uv).rgb;
        
        // --- VISUAL CURSOR LOGIC (CHANGED) ---
        // Snap the current fragment and the mouse to the grid
        vec2 gridFrag = floor(fragCoord / CELL_SIZE);
        vec2 gridMouse = floor(iMouse.xy / CELL_SIZE);
        
        // If this fragment belongs to the cell under the mouse
        if (gridFrag == gridMouse) {
            // Add a white outline or tint to indicate selection
            col += 0.3; 
        }
        // -------------------------------------

        fragColor = vec4(col, 1.0);
    }
    void main() { mainImage(fragColor, gl_FragCoord.xy); }
    `;

    // 2. Buffer A (Simulation & Game Logic)
    const codeBufferA = `
    #define CELL_SIZE 5.0

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        // 0. SCALING LOGIC
        vec2 scaledCoord = floor(fragCoord / CELL_SIZE) * CELL_SIZE;
        ivec2 iFrag = ivec2(scaledCoord);
        ivec2 iRes = ivec2(iResolution.xy);

        // 1. INITIALIZATION
        if (iFrame == 0) {
            fragColor = vec4(0.0, 0.0, 0.0, 1.0);

            const int pW = 7;
            const int pH = 28;

            // RED MATRIX
            int R_Data[pW * pH] = int[](
                0, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 1, 0,
                0, 0, 1, 1, 0, 0, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 1, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 0, 1,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 1,
                0, 0, 0, 0, 1, 0, 1,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 1,
                0, 0, 0, 0, 0, 1, 1,
                0, 0, 0, 0, 0, 1, 0
            );

            // GREEN MATRIX
            int G_Data[pW * pH] = int[](
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 1, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,


                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 1, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0
            );

            // BLUE MATRIX
            int B_Data[pW * pH] = int[](
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,

                0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 1, 0,

                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0
            );

            // 3. CENTERING LOGIC
            vec2 gridCenter = iResolution.xy / 2.0;
            vec2 patternSize = vec2(float(pW), float(pH)) * CELL_SIZE;
            vec2 startPos = gridCenter - (patternSize * 0.5);

            vec2 relPos = fragCoord - startPos;
            int col = int(floor(relPos.x / CELL_SIZE));
            int rowRaw = int(floor(relPos.y / CELL_SIZE));
            int row = (pH - 1) - rowRaw;

            if (col >= 0 && col < pW && row >= 0 && row < pH) {
                int index = row * pW + col;
                fragColor.r = float(R_Data[index]);
                fragColor.g = float(G_Data[index]);
                fragColor.b = float(B_Data[index]);
            }
            return;
        }

        // 2. READ PREVIOUS STATE
        vec3 self = texelFetch(iChannel0, iFrag, 0).rgb;
        vec3 nextState = self;

        bool paused = uPaused;
        bool step   = uStep;

        // Simulation Logic
        if (!paused || step) {
            vec3 sumSelf = vec3(0.0);
            vec3 sumPrey = vec3(0.0);
            ivec2 simRes = ivec2(floor(iResolution.xy / CELL_SIZE) * CELL_SIZE);

            for (int i = -1; i <= 1; i++) {
                for (int j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) continue;
                    ivec2 offset = ivec2(i, j) * int(CELL_SIZE);
                    ivec2 pos = (iFrag + offset + simRes) % simRes;
                    vec3 n = texelFetch(iChannel0, pos, 0).rgb;

                    if (n.r > 0.5) { sumSelf.r++; sumPrey.g++; }
                    if (n.g > 0.5) { sumSelf.g++; sumPrey.b++; }
                    if (n.b > 0.5) { sumSelf.b++; sumPrey.r++; }
                }
            }

            nextState = vec3(0.0);

            float totalR = sumSelf.r + (sumPrey.r * 0.5);
            if (self.r > 0.5) nextState.r = (totalR >= 2.0 && totalR <= 3.0) ? 1.0 : 0.0;
            else nextState.r = (totalR == 3.0) ? 1.0 : 0.0;

            float totalG = sumSelf.g + (sumPrey.g * 0.5);
            if (self.g > 0.5) nextState.g = (totalG >= 2.0 && totalG <= 3.0) ? 1.0 : 0.0;
            else nextState.g = (totalG == 3.0) ? 1.0 : 0.0;

            float totalB = sumSelf.b + (sumPrey.b * 0.5);
            if (self.b > 0.5) nextState.b = (totalB >= 2.0 && totalB <= 3.0) ? 1.0 : 0.0;
            else nextState.b = (totalB == 3.0) ? 1.0 : 0.0;
        }

        // 3. MOUSE INTERACTION (Drawing)
        // Check if mouse is clicked (z > 0)
        if (iMouse.z > 0.0) {
             // Snap mouse to grid
            vec2 gridFrag = floor(fragCoord / CELL_SIZE);
            vec2 gridMouse = floor(iMouse.xy / CELL_SIZE);

            if (gridFrag == gridMouse) {
                if(uKeyR) nextState.r = 1.0;
                if(uKeyG) nextState.g = 1.0;
                if(uKeyB) nextState.b = 1.0;
                if(uKeyE) nextState = vec3(0.0);
            }
        }

        fragColor = vec4(nextState, 1.0);
    }
    void main() { mainImage(fragColor, gl_FragCoord.xy); }
    `;

    // --- BOILERPLATE ---

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vsSrc, fsSrc) {
      const vs = createShader(gl, gl.VERTEX_SHADER, vsSrc);
      const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      return prog;
    }

    const progImage = createProgram(gl, vsSource, fsHeader + codeImage);
    const progBufferA = createProgram(gl, vsSource, fsHeader + codeBufferA);

    if (!progImage || !progBufferA) return;

    // Full screen quad
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    function createTexture() {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      return tex;
    }

    let texA_read = createTexture();
    let texA_write = createTexture();
    const fbo = gl.createFramebuffer();

    const state = {
        frame: 0,
        mouse: [0, 0, 0, 0], 
        paused: false,
        stepTrigger: false,
        activeTool: 'R'
    };

    // --- EVENT LISTENERS (CHANGED) ---

    const updateMouse = (e, isDown, isClick) => {
       const rect = canvas.getBoundingClientRect();
       
       // <--- CHANGED: Multiply by Device Pixel Ratio (dpr)
       const dpr = window.devicePixelRatio || 1;
       const x = (e.clientX - rect.left) * dpr;
       
       // <--- CHANGED: Calculate Y based on actual Canvas Height (which is already scaled)
       const y = canvas.height - ((e.clientY - rect.top) * dpr);
       
       state.mouse[0] = x;
       state.mouse[1] = y;
       if (isDown) {
         state.mouse[2] = x;
         state.mouse[3] = y;
       } else if (isClick === false) {
         state.mouse[2] = -Math.abs(state.mouse[2]);
         state.mouse[3] = -Math.abs(state.mouse[3]);
       }
    };

    const onKeyDown = (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            state.paused = !state.paused;
            setIsPaused(state.paused);
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            state.stepTrigger = true;
        } else if (e.code === 'KeyR') {
            state.activeTool = 'R';
            setActiveTool('R');
        } else if (e.code === 'KeyG') {
            state.activeTool = 'G';
            setActiveTool('G');
        } else if (e.code === 'KeyB') {
            state.activeTool = 'B';
            setActiveTool('B');
        } else if (e.code === 'KeyE') {
            state.activeTool = 'E';
            setActiveTool('E');
        }
    };

    canvas.addEventListener('mousemove', (e) => updateMouse(e, (e.buttons & 1) === 1, null));
    canvas.addEventListener('mousedown', (e) => updateMouse(e, true, true));
    canvas.addEventListener('mouseup', (e) => updateMouse(e, false, false));
    window.addEventListener('keydown', onKeyDown);

    // --- RENDER LOOP ---

    let animationId;
    const startTime = performance.now();

    function render() {
      // Resize logic
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = Math.floor(canvas.clientWidth * dpr);
      const displayHeight = Math.floor(canvas.clientHeight * dpr);
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.bindTexture(gl.TEXTURE_2D, texA_read);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindTexture(gl.TEXTURE_2D, texA_write);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        state.frame = 0;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      const time = (performance.now() - startTime) / 1000.0;

      const setUniforms = (prog) => {
          gl.useProgram(prog);
          gl.uniform3f(gl.getUniformLocation(prog, 'iResolution'), canvas.width, canvas.height, 1.0);
          gl.uniform1f(gl.getUniformLocation(prog, 'iTime'), time);
          gl.uniform1i(gl.getUniformLocation(prog, 'iFrame'), state.frame);
          gl.uniform4f(gl.getUniformLocation(prog, 'iMouse'), state.mouse[0], state.mouse[1], state.mouse[2], state.mouse[3]);
          gl.uniform1i(gl.getUniformLocation(prog, 'uPaused'), state.paused ? 1 : 0);
          gl.uniform1i(gl.getUniformLocation(prog, 'uStep'), state.stepTrigger ? 1 : 0);
          gl.uniform1i(gl.getUniformLocation(prog, 'uKeyR'), state.activeTool === 'R' ? 1 : 0);
          gl.uniform1i(gl.getUniformLocation(prog, 'uKeyG'), state.activeTool === 'G' ? 1 : 0);
          gl.uniform1i(gl.getUniformLocation(prog, 'uKeyB'), state.activeTool === 'B' ? 1 : 0);
          gl.uniform1i(gl.getUniformLocation(prog, 'uKeyE'), state.activeTool === 'E' ? 1 : 0);
      };

      setUniforms(progBufferA);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texA_read);
      gl.uniform1i(gl.getUniformLocation(progBufferA, 'iChannel0'), 0);

      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texA_write, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      setUniforms(progImage);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texA_write);
      gl.uniform1i(gl.getUniformLocation(progImage, 'iChannel0'), 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      let temp = texA_read;
      texA_read = texA_write;
      texA_write = temp;

      state.frame++;
      state.stepTrigger = false;
      animationId = requestAnimationFrame(render);
    }

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        <div style={{
            position: 'absolute', top: 10, left: 10,
            background: 'rgba(0,0,0,0.7)', color: 'white',
            padding: '10px', borderRadius: '4px', fontFamily: 'monospace',
            pointerEvents: 'none', userSelect: 'none'
        }}>
            <div><strong>RGB Life</strong></div>
            <div>STATUS: <span style={{color: isPaused ? 'red' : '#0f0'}}>{isPaused ? 'PAUSED' : 'RUNNING'}</span></div>
            <div>TOOL: <span style={{color: activeTool === 'E' ? 'gray' : activeTool === 'R' ? '#f55' : activeTool === 'G' ? '#5f5' : '#55f'}}>{activeTool}</span></div>
            <hr style={{borderColor: '#555'}}/>
            <div style={{fontSize: '0.8em'}}>
                [Space] Pause/Play<br/>
                [Right] Step<br/>
                [R/G/B] Select Color<br/>
                [E] Eraser<br/>
                [Click] Draw
            </div>
        </div>
    </div>
  );
}