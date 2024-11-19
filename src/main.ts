import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables based on the environment
 // have to set this on EC2 console like: export NODE_ENV=production
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '../config/.env.prod') });
} else {
  dotenv.config({ path: path.join(__dirname, '../config/.env.local') });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get the port from the environment variable (default to 3001 if not set)
  const port = process.env.PORT;

  // Start the app on the configured port
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();