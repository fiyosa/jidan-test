const secret = {
  APP_NAME: process.env.APP_NAME,
  APP_MODE: process.env.APP_MODE,
  APP_PORT: process.env.APP_PORT,

  SERVER_TIMEOUT: 1000 * 30, // miliseconds
  SERVER_URL: process.env.SERVER_URL,
}

export default secret
