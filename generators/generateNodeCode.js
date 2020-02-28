const { generateArtboardCode } = require("./generateArtboardCode");
const { generateRectangleCode } = require("./generateRectangleCode");
const { generateEllipseCode } = require("./generateEllipseCode");
const { generatePolygonCode } = require("./generatePathCode");
const { generateLineCode } = require("./generateLineCode");
const { generatePathCode } = require("./generatePathCode");
const { generateBooleanGroupCode } = require("./generatePathCode");
const { generateTextCode } = require("./generateTextCode/index");
const { generateGroupCode } = require("./generateGroupCode");
const { generateSymbolInstanceCode } = require("./generateSymbolInstanceCode");
const { generateRepeatGridCode } = require("./generateRepeatGridCode");
const { generateLinkedGraphicCode } = require("./generateLinkedGraphicCode");

function generateNodeCode(node) {
  switch (node.constructor.name) {
    case "Artboard":
      return generateArtboardCode(node);

    case "Rectangle":
      return generateRectangleCode(node);

    case "Ellipse":
      return generateEllipseCode(node);

    case "Polygon":
      return generatePolygonCode(node);

    case "Line":
      return generateLineCode(node);

    case "Path":
      return generatePathCode(node);

    case "BooleanGroup":
      return generateBooleanGroupCode(node);

    case "Text":
      return generateTextCode(node);

    case "Group":
      return generateGroupCode(node);

    case "SymbolInstance":
      return generateSymbolInstanceCode(node);

    case "RepeatGrid":
      return generateRepeatGridCode(node);

    case "LinkedGraphic":
      return generateLinkedGraphicCode(node);

    default:
      return "<StrangeNode />\n";
  }
}

module.exports = {
  generateNodeCode
};