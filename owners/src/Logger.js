import chalk from 'chalk';

export default {
  info: (msg, context = 'Info') =>
    console.log(
      chalk.yellow(`[${context}]`),
      msg,
      chalk.green(`[${new Date().toISOString()}]`)
    ),
  error: (msg, context = 'Error') =>
    console.error(
      chalk.red(`[${context}]`),
      msg,
      chalk.green(`[${new Date().toISOString()}]`)
    ),
};
