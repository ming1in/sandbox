const isProd = false;

const logger = (...args) => {
  if (!isProd) console.log(...args);
}

x = "hello";
logger("x:", x);

