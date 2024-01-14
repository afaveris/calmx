import { User } from '@/entities/user';
import { iProfileDAO } from '@/interfaces/iProfileDAO';
import * as SQLite from 'expo-sqlite';

export class ProfileDAO implements iProfileDAO {
  private db: SQLite.SQLiteDatabase;
  constructor(db: SQLite.SQLiteDatabase) {
    this.db = db;
  }

  public initUser = async (): Promise<void> => {
    await this.db.transactionAsync(async (tx) => {
      await tx.executeSqlAsync(
        'CREATE TABLE IF NOT EXISTS profile (' +
          'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
          'name TEXT NOT NULL, ' +
          'login TEXT NOT NULL, ' +
          'password TEXT NOT NULL, ' +
          'date_of_birth TIMESTAMP NOT NULL, ' +
          'interaction_time TIMESTAMP NOT NULL, ' +
          'interaction_date INTEGER NOT NULL);'
      );
    });
  };

  public insertUser = async (user: User): Promise<void> => {
    try {
      await this.db.transactionAsync(async (tx) => {
        const describe = await tx.executeSqlAsync(
          'PRAGMA table_info(profile);'
        );
        console.log(describe);
        await tx.executeSqlAsync(
          'INSERT INTO profile (name, login, password, date_of_birth, interaction_time, interaction_date) ' +
            'VALUES (?, ?, ?, ?, ?, ?);',
          [
            user.name,
            user.login,
            user.password,
            user.dateOfBirth,
            user.interactionTime,
            user.interactionDate,
          ]
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  public getUser = async (): Promise<User | null> => {
    let user: User | null = null;
    await this.db.transactionAsync(async (tx) => {
      await tx
        .executeSqlAsync('SELECT * FROM profile ORDER BY id DESC LIMIT 1;', [])
        .then((result) => {
          console.log(result.rows);
          user = User.fromJSON(result.rows[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return user;
  };

  public dropUser = async (): Promise<void> => {
    try {
      await this.db.transactionAsync(async (tx) => {
        await tx.executeSqlAsync('DROP TABLE profile;');
      });
    } catch (error) {
      console.log(error);
    }
  };
}
