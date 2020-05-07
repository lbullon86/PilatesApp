
import * as path from 'path';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
​
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg'
];
​
const resolvePath = (file: string) => path.resolve(`/home/ubuntu/PilatesApp/Front/dist/AppMaite/${file}`);
​
@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    {
      const { baseUrl } = req;
      if (baseUrl.indexOf('api') === 1) {
        // it starts with /api --> continue with execution
        next();
      } else if (allowedExt.filter(ext => baseUrl.indexOf(ext) > 0).length > 0) {
        // it has a file extension --> resolve the file
        res.sendFile(resolvePath(baseUrl));
      } else {
        // in all other cases, redirect to the index.html!
        res.sendFile(resolvePath('index.html'));
      }
    }
  }
}