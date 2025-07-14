import app from './src/app';
import Bun from 'bun';

Bun.server({
  port: process.env.PORT || 3000, // ✅ Uses Render's port or defaults to 3000 locally
  fetch: app.fetch,
});
