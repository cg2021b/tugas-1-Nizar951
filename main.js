function main(){
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    var kiri = [];

    kiri = bateraikiri();
    
    var kanan = [];

    kanan = bateraikanan();

    var vertices = [...kiri, ...kanan]
    var kiri_len = kiri.length / 5;
    var kanan_len = kanan.length / 5;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderCode = `
    attribute vec2 aPosition;
    attribute vec3 aColor;
    varying vec3 vColor;
    uniform mat4 u_matrix;
    void main(){
        gl_Position = u_matrix * vec4(aPosition, 0, 1);
        vColor = aColor;
    }`;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var compiled = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
    if (!compiled) {
        console.error(gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    void main(){
        gl_FragColor = vec4(vColor, 1.0);
    }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderCode);
    gl.compileShader(fragmentShader);

    compiled = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
    if (!compiled) {
        console.error(gl.getShaderInfoLog(fragmentShader));
    }

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);


    var linked = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
    if (!linked) {
        console.error(gl.getProgramInfoLog(shaderProgram));
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var aPosition = gl.getAttribLocation(shaderProgram, `aPosition`);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, `aColor`);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    
    let change = 0;
    let speed = 0.0019;
    function drawScene() {
        if(change >= 0.2 || change <=-0.35) speed = -speed;
        change += speed;
        gl.useProgram(shaderProgram);
        const objekKiri = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ]
        
        const objekKanan = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, change, 0.0, 1.0,
        ]
        
        gl.clearColor(0.0, 0.0, 0.0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const u_matrix = gl.getUniformLocation(shaderProgram, 'u_matrix');
        gl.uniformMatrix4fv(u_matrix, false, objekKiri);
        gl.drawArrays(gl.TRIANGLES, 0, (kiri.length/5));
        
        gl.uniformMatrix4fv(u_matrix, false, objekKanan);
        gl.drawArrays(gl.TRIANGLES, (kiri.length/5), (kanan.length/5));
        requestAnimationFrame(drawScene);
    }

    drawScene();
}