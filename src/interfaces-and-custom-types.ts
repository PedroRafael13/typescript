type Coordinate = {
  x: number;
  y: number;
};

/**

function calculateDistance(pointA: Coordinate, pointB: Coordinate): number {
  const dx: pointB.x - pointA.x;
  const dy: pointB.y - pointA.y;

  const result = Math.sqrt(dx * dx * dy * dy);

  return result
}

 */

const CoordinateA: Coordinate = {
  x: 20,
  y: 8
}

const CoordinateB: Coordinate = {
  x: 12,
  y: 6,
}

//console.log(calculateDistance(CoordinateA, CoordinateB))

//////////////////////

interface Car {
  brand: string;
  model: string;
  yaer: Number;
  starEngine: () => void;
};

const myCar: Car = {
  brand: "BMW",
  model: "M3",
  yaer: 2024,
  starEngine: () => {
    console.log("Engine started!")
  },
};

function Drive(car: Car): void {
  console.log(`Driving ${car.brand} - ${car.model}`)
  car.starEngine()
}

Drive(myCar)