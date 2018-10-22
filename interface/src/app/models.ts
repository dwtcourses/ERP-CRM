export interface Deserializable<T> {
  deserialize(input: any): T;
}


export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
  active:boolean;
  phone_country:string;
  phone_number:string;
}


export class Token{
  access_token:string;
}