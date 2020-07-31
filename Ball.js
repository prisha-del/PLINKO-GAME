class Ball {
	constructor(x, y, r){
		var options = {
			restitution: 1.0
		}
		this.body = Bodies.circle(x, y, r, options);
		this.r = r;
		World.add(world, this.body);
	}	

	display() {
		fill(255,0,100,255);		
		var pos = this.body.position;
		ellipse(pos.x, pos.y, this.r, this.r);
	}
}