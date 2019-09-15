$(document).ready(()=>{

    const canvas = new Canvas();
    const c = canvas.context;

    let points = [];
    let numPoints = 150;

    for (let i = 0; i < numPoints; i++) {
        let pos = new Vector(Math.random() * canvas.size.x, Math.random() * canvas.size.y);
        let vel = Vector.random();
        vel.divideVector(2);
        points.push(new Point(c, pos, vel, canvas.size));
    }

    // MAIN FUNCTION
    (function animate(){
        requestAnimationFrame(animate);
        canvas.update();

        for (let i = 0; i < points.length; i++) {
            points[i].update();
            points[i].render(points);
        }
    })();
});