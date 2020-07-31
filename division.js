class Division {
	constructor(x, y, w, h){
		var options = {
			isStatic: true
		}
		this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
		World.add(world, this.body);
	}	

	display() {
		fill(255,0,100,255);		
        var pos = this.body.position;
        rectMode(CENTER);
		rect(pos.x, pos.y, this.w, this.h);
    }
}