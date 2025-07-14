Bun.server({
  port: process.env.PORT || 3000, // ✅ Dynamic port (works everywhere)
  fetch: app.fetch
});
