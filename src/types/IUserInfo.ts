export interface UserData {
  name: string
  bio: string
  followers: number
  html_url: string
  avatar_url: string
}

export interface IUser {
  data: UserData | undefined
}