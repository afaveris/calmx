export class User {
  public id: number;
  public login: string;
  public password: string;
  public name: string;
  public dateOfBirth: string;
  public interactionTime: number;
  public interactionDate: string;
  constructor(
    id: number,
    login: string,
    password: string,
    name: string,
    dateOfBirth: string,
    interactionTime: number,
    interactionDate: string
  ) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.interactionTime = interactionTime;
    this.interactionDate = interactionDate;
  }
  public static fromJSON(json: JSON.JSONObject): User {
    return new User(
      json.id,
      json.login,
      json.password,
      json.name,
      json.date_of_birth,
      json.interaction_time,
      json.interaction_date
    );
  }
}
