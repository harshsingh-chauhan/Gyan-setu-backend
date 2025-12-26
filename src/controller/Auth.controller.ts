import { Request, Response } from 'express';
import AuthService from '../services/Auth.service';
import { sendResponse } from '../utils/response.utils';

class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendResponse(res, 201, { message: 'User registered successfully' });
  }

  public async login(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendResponse(res, 200, { message: 'User logged in successfully' });
  }

  public async refresh(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendResponse(res, 200, { message: 'Token refreshed successfully' });
  }
}

export default new AuthController();
