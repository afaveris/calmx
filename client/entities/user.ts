export class User {
  public id: number;
  public username: string;
  public password: string;
  public email: string;
  public socialNetworkId: number;
  public socialNetworkData: JSON.JSONObject;
  public dateOfBirth: Date;
  public created_at: Date;
  public updated_at: Date;
  constructor(
    id: number,
    username: string,
    password: string,
    email: string,
    socialNetworkId: number,
    socialNetworkData: JSON.JSONObject,
    dateOfBirth: Date,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.socialNetworkId = socialNetworkId;
    this.socialNetworkData = socialNetworkData;
    this.dateOfBirth = dateOfBirth;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
  public static fromJSON(json: JSON.JSONObject): User {
    return new User(
      json.id,
      json.username,
      json.password,
      json.email,
      json.social_network_id,
      json.social_network_data,
      json.dateOfBirth,
      json.created_at,
      json.updated_at
    );
  }
}
