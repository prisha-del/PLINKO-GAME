class Plink {
	constructor(x, y, r){
		var options = {
			restitution: 1,
			friction: 0,
			isStatic: true
		}
		this.body = Bodies.circle(x, y, r, options);
		this.r = r;
		World.add(world, this.body);
	}

	display(){	
			fill(0,255,0);
			stroke(0,255,0);
			var pos = this.body.position
			ellipse(pos.x, pos.y, this.r * 2);
	}
}