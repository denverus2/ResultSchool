import chalk from 'chalk'
const path = require('path');
import text from './data.js'
console.log(chalk.blue(text))
console.log('Path:', path.basename(__filename))
