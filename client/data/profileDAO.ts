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
        'CREATE TABLE IF NOT EXISTS profile' +
          '(id INTEGER PRIMARY KEY NOT NULL, ' +
          'name TEXT NOT NULL, ' +
          'date_of_birth TEXT NOT NULL, ' +
          'interaction_time TIMESTAMP NOT NULL, ' +
          'interaction_date INTEGER NOT NULL);'
      );
    });
  };

  public insertUser = async (user: User): Promise<void> => {
    console.log(user);
    await this.db.transactionAsync(async (tx) => {
      await tx.executeSqlAsync(
        'INSERT INTO profile (name, date_of_birth, interaction_time, interaction_date) ' +
          'VALUES (?, ?, ?, ?);',
        [
          user.name,
          user.dateOfBirth,
          user.interactionTime,
          user.interactionDate,
        ]
      );
    });
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
    await this.db.transactionAsync(async (tx) => {
      await tx.executeSqlAsync('DELETE FROM profile;');
    });
  };
}
