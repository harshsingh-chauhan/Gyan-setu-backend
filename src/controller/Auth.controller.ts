import { Request, Response } from 'express';
import AuthService from '../services/Auth.service';
import { sendSuccess } from '../utils/response.utils';

class AuthController {
  public async register(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendSuccess(res, { message: 'User registered successfully' }, 201);
  }

  public async login(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendSuccess(res, { message: 'User logged in successfully' }, 200);
  }

  public async refresh(req: Request, res: Response): Promise<void> {
    // Implementation to be added in a future task
    sendSuccess(res, { message: 'Token refreshed successfully' }, 200);
  }
}

export default new AuthController();
