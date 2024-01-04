import { User } from '@/entities/user';

export abstract class iProfileDAO {
  public abstract initUser(): Promise<void>;
  public abstract insertUser(username: User): Promise<void>;
  public abstract getUser(): Promise<User | null>;
  public abstract dropUser(): Promise<void>;
}
