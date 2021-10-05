function sin(a){
    return Math.sin(Math.PI * a);
    }
    
function cos(a){
    return Math.cos(Math.PI * a);
}

function gelasKiri(){
    var kiri = [];
    let A,B,C,D,E;
    
    //badan atas
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 271) / 180;
        
        
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.62, 
            110/255, 110/255, 110/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            110/255, 110/255, 110/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.62,
            110/255, 110/255, 110/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // badan bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 - 0.5, 
            200/255, 200/255, 200/255,
        ];
    
        var vertex_2 = [
            -0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 - 0.5,
            200/255, 200/255, 200/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    A = kiri.slice(180*5*3, 180*5*3+5);
    B = kiri.slice(181*5*3, 181*5*3+5);
    C = kiri.slice(5, 10);
    D = kiri.slice(361*5*3, 361*5*3+5);
    E = kiri.slice(0*5*3, 0*5*3+5);

    kiri = kiri.concat(A, B, C);
    kiri = kiri.concat(B, C, D);
    kiri = kiri.concat(C, D, E);


    // atas komplemen
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.62, 
            190/255, 190/255, 190/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.62,
            190/255, 190/255, 190/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas komplemen
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.11 - 0.5 , cos(j) * 0.11 + 0.62, 
            190/255, 190/255, 190/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            215/255, 215/255, 215/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 - 0.5 , cos(k) * 0.11 + 0.62, 
            215/255, 215/255, 215/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas item
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.09 - 0.5 , cos(j) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            0/255, 0/255, 0/255,
        ];

        var vertex_3 = [
            sin(k) * 0.09 - 0.5 , cos(k) * 0.085 + 0.62,
            0/255, 0/255, 0/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas item
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.09 - 0.5 , cos(j) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            0/255, 0/255, 0/255,
        ];

        var vertex_3 = [
            sin(k) * 0.09 - 0.5 , cos(k) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas ujung
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.075 - 0.5 , cos(j) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            230/255, 230/255, 230/255,
        ];

        var vertex_3 = [
            sin(k) * 0.075 - 0.5 , cos(k) * 0.065 + 0.628,
            230/255, 230/255, 230/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas ujung komp
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.075 - 0.5 , cos(j) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];
    
        var vertex_2 = [
            -0.5, 0.62, 
            230/255, 230/255, 230/255,
        ];

        var vertex_3 = [
            sin(k) * 0.075 - 0.5 , cos(k) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];

        kiri = kiri.concat(vertex_1, vertex_2, vertex_3);
    }
    return kiri;
}

function gelasKanan(){
    var kanan = [];
    let A,B,C,D,E;
    
    //badan atas
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 271) / 180;
        
        
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.62, 
            110/255, 110/255, 110/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            110/255, 110/255, 110/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.62,
            110/255, 110/255, 110/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // badan bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 - 0.5, 
            200/255, 200/255, 200/255,
        ];
    
        var vertex_2 = [
            0.5, -0.5, 
            200/255, 200/255, 200/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 - 0.5,
            200/255, 200/255, 200/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    A = kanan.slice(180*5*3, 180*5*3+5);
    B = kanan.slice(181*5*3, 181*5*3+5);
    C = kanan.slice(5, 10);
    D = kanan.slice(361*5*3, 361*5*3+5);
    E = kanan.slice(0*5*3, 0*5*3+5);
    
    kanan = kanan.concat(A, B, C);
    kanan = kanan.concat(B, C, D);
    kanan = kanan.concat(C, D, E);
    
    
    // atas komplemen
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.62, 
            190/255, 190/255, 190/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            190/255, 190/255, 190/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.62,
            190/255, 190/255, 190/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas komplemen
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.11 + 0.5 , cos(j) * 0.11 + 0.62, 
            190/255, 190/255, 190/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            215/255, 215/255, 215/255,
        ];

        var vertex_3 = [
            sin(k) * 0.11 + 0.5 , cos(k) * 0.11 + 0.62, 
            215/255, 215/255, 215/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas item
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.09 + 0.5 , cos(j) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            0/255, 0/255, 0/255,
        ];

        var vertex_3 = [
            sin(k) * 0.09 + 0.5 , cos(k) * 0.085 + 0.62,
            0/255, 0/255, 0/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas item
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.09 + 0.5 , cos(j) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            0/255, 0/255, 0/255,
        ];

        var vertex_3 = [
            sin(k) * 0.09 + 0.5 , cos(k) * 0.085 + 0.62, 
            0/255, 0/255, 0/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas ujung
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i + 271) / 180;

        var vertex_1 = [
            sin(j) * 0.075 + 0.5 , cos(j) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            230/255, 230/255, 230/255,
        ];

        var vertex_3 = [
            sin(k) * 0.075 + 0.5 , cos(k) * 0.065 + 0.628,
            230/255, 230/255, 230/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    // atas ujung komp
    for(var i = 90; i<=360; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+ 271) / 180;
        
        var vertex_1 = [
            sin(j) * 0.075 + 0.5 , cos(j) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];
    
        var vertex_2 = [
            0.5, 0.62, 
            230/255, 230/255, 230/255,
        ];

        var vertex_3 = [
            sin(k) * 0.075 + 0.5 , cos(k) * 0.065 + 0.628, 
            230/255, 230/255, 230/255,
        ];

        kanan = kanan.concat(vertex_1, vertex_2, vertex_3);
    }

    return kanan;
}