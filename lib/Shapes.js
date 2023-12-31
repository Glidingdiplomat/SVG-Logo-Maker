function Circle(data) {
  return (
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g>
        <circle cx="150" cy="100" r="80" fill={data.shapeColor} />
        <text
          x="150"
          y="125"
          font-size="60"
          text-anchor="middle"
          fill={data.textColor}
        >
          {data.characters}
        </text>
      </g>
    </svg>
  );
}

function Square(data) {
  return (
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g>
        <rect
          x="40"
          y="40"
          width="220"
          height="120"
          fill="${data.shapeColor}"
        ></rect>
        <text
          x="150"
          y="125"
          font-size="60"
          text-anchor="middle"
          fill={data.textColor}
        >
          {data.characters}
        </text>
      </g>
    </svg>
  );
}

function Triangle(data) {
  return (
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="white" />
      <g>
        <polygon points="150,18 244,182 56,182" fill="${data.shapeColor}" />
        <text
          x="150"
          y="125"
          font-size="60"
          text-anchor="middle"
          fill={data.textColor}
        >
          {data.characters}
        </text>
      </g>
    </svg>
  );
}

module.exports = { Circle, Square, Triangle };
