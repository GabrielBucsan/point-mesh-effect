class Point{
    constructor(c, pos, vel, cs){
        this.c = c;
        this.pos = pos;
        this.vel = vel;

        this.cs = cs;
        this.perceptionRadius = 150;
        this.r = 2;
    }

    update(){
        this.pos.add(this.vel);

        if(this.pos.x >= this.cs.x - this.r / 2 || this.pos.x <= this.r / 2){
            this.vel.x = -this.vel.x;
        }
        if(this.pos.y >= this.cs.y - this.r / 2 || this.pos.y <= this.r / 2){
            this.vel.y = -this.vel.y;
        }
    }

    render(points){
        // this.c.beginPath();
        // this.c.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
        // this.c.closePath();
        // this.c.fillStyle = '#D2D2D2';
        // this.c.fill();

        for (let i = 0; i < points.length; i++) {
            if(this === points[i]) continue;
            let distance = this.pos.distance(points[i].pos);
            
            if(distance < this.perceptionRadius){
                this.c.save();
                this.c.beginPath();
                this.c.globalAlpha = (this.perceptionRadius - distance) / this.perceptionRadius;
                this.c.moveTo(this.pos.x, this.pos.y);
                this.c.lineTo(points[i].pos.x, points[i].pos.y);
                this.c.closePath();
                this.c.strokeStyle = '#A6A6A6';
                this.c.lineWidth = 0.2;
                this.c.stroke();
                this.c.restore();
            }
        }
    }
}