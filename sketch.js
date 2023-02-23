function setup() {
    // put setup code here 
    createCanvas(800,400);  
    background(204,255,255)

    x1 = 399,5;
    y1 = 0;

    x2 = 399;
    y2 = 399,5;

    a = 200;
    b = 150;
    lebar = 200;
    tinggi = 200;

    c = 200;
    d = 250;
    lebar3 = 50;
    tinggi3 = 50;

    a1 = 200;
    b1 = 212;
    lebar4 = 8;
    tinggi4 = 8;

    a2 = 180;
    b2 = 218;
    lebar5 = 8;
    tinggi5 = 8;

    a3 = 220;
    b3 = 218;
    lebar6 = 8;
    tinggi6 = 8;

    a4 = 233;
    b4 = 233;
    lebar7 = 8;
    tinggi7 = 8;

    a5 = 167;
    b5 = 233;
    lebar8 = 8;
    tinggi8 = 8;

    a6 = 200;
    b6 = 50;
    lebar9 = 18;
    tinggi9 = 18;

    x1 = 175;
    y1 = 247;
    lebar1 = 50;
    tinggi1 = 100;

    x2 = 170;
    y2 = 345;
    lebar2 = 60;
    tinggi2 = 30;

    h = 100;
    i = 0;

}
    

function draw() {
    //line(x1,y1,x2,y2);

    strokeWeight(4);
    fill(0);
    stroke("WHITE")
    line(399,0,399,399)

    strokeWeight(4);
    fill(0,255,255);
    stroke("WHITE");
    ellipse(a,b,lebar,tinggi);
    for (var j=103; j<=300;j++){
        x = j
        y = 155+ 25 * Math.sin(PI/30*x)
        point(x,y)
    }

    strokeWeight(4);
    fill(255,255,51);
    stroke("WHITE");
    ellipse(c,d,lebar3,tinggi3);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a1,b1,lebar4,tinggi4);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a2,b2,lebar5,tinggi5);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a3,b3,lebar6,tinggi6);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a4,b4,lebar7,tinggi7);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a5,b5,lebar8,tinggi8);

    strokeWeight(3);
    fill(255,255,51);
    ellipse(200,50,18,18)
    stroke("WHITE");
    ellipse(a6,b6,lebar9,tinggi9);

    strokeWeight(4);
    fill(20);
    stroke("WHITE");
    rect(x1,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(96,96,96);
    stroke("WHITE");
    rect(x2,y2,lebar2,tinggi2);

    //gambar bergerak

    var h = 150 + 90 * Math.sin(PI/80*i)
    i+=10
    f=400
    strokeWeight(4);
    stroke("WHITE");
    fill(0,h,h);
    ellipse(a+f,b,lebar,tinggi);

    for (var j=103; j<=300;j++){
        x = j
        y = 155+ 25 * Math.sin(PI/30*x)
        point(x+f,y)
    }

    strokeWeight(4);
    fill(255,255,51);
    stroke("WHITE");
    ellipse(c+f,d,lebar3,tinggi3);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a1+f,b1,lebar4,tinggi4);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a2+f,b2,lebar5,tinggi5);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a3+f,b3,lebar6,tinggi6);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a4+f,b4,lebar7,tinggi7);

    strokeWeight(5);
    fill(255,255,255);
    stroke("WHITE");
    ellipse(a5+f,b5,lebar8,tinggi8);

    strokeWeight(3);
    fill(255,255,51);
    ellipse(200,50,18,18)
    stroke("WHITE");
    ellipse(a6+f,b6,lebar9,tinggi9);

    strokeWeight(4);
    fill(20);
    stroke("WHITE");
    rect(x1+f,y1,lebar1,tinggi1);

    strokeWeight(4);
    fill(96,96,96);
    stroke("WHITE");
    rect(x2+f,y2,lebar2,tinggi2);
}
