import { User } from '@/entities/user';
import { iProfileDAO } from '@/interfaces/iProfileDAO';
import * as SQLite from 'expo-sqlite';

export class ProfileDAO implements iProfileDAO {
  private db: SQLite.SQLiteDatabase;
  constructor(db: SQLite.SQLiteDatabase) {
    this.db = db;
  }

  public async initUser(): Promise<void> {
    await this.db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS user' +
          '(id INTEGER PRIMARY KEY NOT NULL, ' +
          'username TEXT NOT NULL, ' +
          'email TEXT NOT NULL, ' +
          'social_network_id SERIAL NOT NULL, ' +
          'date_of_birth DATE NOT NULL, ' +
          'access_token TEXT NULL, ' +
          'refresh_token TEXT NULL, ' +
          'verified BOOLEAN NOT NULL DEFAULT FALSE);'
      );
    });
    console.log('User table created');
  }

  public async insertUser(user: User): Promise<void> {
    // console.log(user);
    this.db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO user (username, email, social_network_id, date_of_birth, access_token, refresh_token, verified) ' +
          'VALUES (?, ?, ?, ?, ?, ?, ?);',
        [
          user.username,
          user.password,
          user.email,
          user.socialNetworkId,
          JSON.stringify(user.socialNetworkData),
          user.dateOfBirth.toISOString(),
          user.created_at.toISOString(),
          user.updated_at.toISOString(),
        ]
      );
    });
  }

  public async getUser(): Promise<User | null> {
    let data = null;
    await this.db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user ORDER BY id DESC LIMIT 1;',
        [],
        (_, { rows }) => {
          data = rows;
          console.log(data);
        }
      );
    });
    if (data !== null) {
      return User.fromJSON(data[0]);
    }
    return null;
  }

  public async dropUser(): Promise<void> {
    this.db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS user;');
    });
  }
}
