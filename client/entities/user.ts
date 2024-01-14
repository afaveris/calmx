export class User {
  public id: number;
  public name: string;
  public dateOfBirth: string;
  public interactionTime: number;
  public interactionDate: string;
  constructor(
    id: number,
    name: string,
    dateOfBirth: string,
    interactionTime: number,
    interactionDate: string
  ) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.interactionTime = interactionTime;
    this.interactionDate = interactionDate;
  }
  public static fromJSON(json: JSON.JSONObject): User {
    return new User(
      json.id,
      json.name,
      json.date_of_birth,
      json.interaction_time,
      json.interaction_date
    );
  }
}
