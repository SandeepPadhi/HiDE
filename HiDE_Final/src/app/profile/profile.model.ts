export class Profile {
  profilePicUrl: string;
  description: string;

  constructor(profilePicUrl: string, description: string) {
    this.profilePicUrl = profilePicUrl;
    this.description = description;
  }
}
