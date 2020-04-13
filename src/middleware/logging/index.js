// Add logging, tracing and timing.
module.exports = (request, response, next) => {
  const receivedAt = Date.now();
  console.log(`--> ${request.method} ${request.url}`);

  next();

  const responseTime = Date.now() - receivedAt;
  console.log(
    `<-- ${request.method} ${request.url} ${response.statusCode} (${responseTime}ms)`
  );
};
