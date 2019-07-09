import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

var document = sketch.selectedDocument;
var selection = context.selection

selection.forEach(function(layer) {

/* Clear All */
layer.hasFixedLeft = false;
layer.hasFixedRight = false;
layer.hasFixedTop = false;
layer.hasFixedBottom = false;
layer.hasFixedWidth = false;
layer.hasFixedHeight = false;

/* Set */

layer.hasFixedLeft = true;
layer.hasFixedRight = true;
layer.hasFixedTop = false;
layer.hasFixedBottom = true;

layer.hasFixedWidth = false;
layer.hasFixedHeight = true;

})


export default function() {
  sketch.UI.message("Fixed Footer")
}
