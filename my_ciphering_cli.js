const {transformator} = require('./modules/transformer');
const {getOutputFile, getInputFile, validateArgs} = require('./args');

validateArgs(); // Validate the console arguments
transformator(getInputFile(), getOutputFile()); // Transform data