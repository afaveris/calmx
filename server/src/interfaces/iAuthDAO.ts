import { AccessToken } from '@/entities/accessToken';
import { RefreshToken } from '@/entities/refreshToken';
import { RegisterRequest, User } from '@/entities/user';

export abstract class iAuthDAO {
  public abstract createUser(
    registerRequest: RegisterRequest
  ): Promise<User | null>;
  public abstract getAccessToken(
    usernameId: string
  ): Promise<AccessToken | null>;
  public abstract getRefreshToken(
    usernameId: string
  ): Promise<RefreshToken | null>;
  public abstract insertAccessToken(accessToken: AccessToken): Promise<void>;
  public abstract insertRefreshToken(refreshToken: RefreshToken): Promise<void>;
  public abstract updateAccessToken(accessToken: AccessToken): Promise<void>;
  public abstract updateRefreshToken(
    refreshToken: RefreshToken,
    newRefreshToken: RefreshToken
  ): Promise<void>;
  public abstract deleteAccessToken(id: number): Promise<void>;
  public abstract deleteRefreshToken(id: number): Promise<void>;
}
