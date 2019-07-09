import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

var document = sketch.selectedDocument;
var selection = context.selection.firstObject()

/* Clear All */
selection.hasFixedLeft = false;
selection.hasFixedRight = false;
selection.hasFixedTop = false;
selection.hasFixedBottom = false;
selection.hasFixedWidth = false;
selection.hasFixedHeight = false;

/* Set */

selection.hasFixedLeft = true;
selection.hasFixedRight = false;
selection.hasFixedTop = true;
selection.hasFixedBottom = true;

selection.hasFixedWidth = true;
selection.hasFixedHeight = false;


export default function() {
  sketch.UI.message("Fixed Left Side Bar")
}
