


var rect = {
	area:function(x,y){
		return (x*y)
	},
	perimeter:function(x,y){
		return (2*(x+y))
	}
};

function solveRect(a,b){
	if (a<=0 || b <=0){
		console.log("Rectangle dimension should be greater than zero: a = " + a + ", and b = " + b);
	} else {
		console.log("The area of a rectangle of dimensions length = "
	               + a + " and breadth = " + b + " is " + rect.area(a,b));
		console.log("The perimeter of a rectangle of dimensions length = "
						 	   + a + " and breadth = " + b + " is " + rect.perimeter(a,b));

	}
}



solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
