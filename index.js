function init() {}

init();

const inquirer = require("inquirer");
const fs = require("fs");
const Shapes = require(`./lib/Shapes.js`);
// questions below
const questions = [
  {
    type: "input",
    name: "characters",
    message: "type in 3 characters you want to implement on your logo",
  },
  {
    type: "input",
    name: "textColor",
    message: "type in the color for the text color",
  },
  {
    type: "input",
    name: "Shape",
    message: ["Square", "Triangle", "Circle"],
  },
  {
    type: "input",
    name: "ShapeColor",
    message: "type in the color you want for your shape color",
  },
];

function runApp() {
    return inquirer.prompt(question)
    .then(data) => (
        const ShapesFunction = [data.Shapes];
        if (ShapesFunction) {
            const logo = ShapesFunction(data);
            const directoryPath = './examples';

            if (!fs.existSync)
        }
    )
}