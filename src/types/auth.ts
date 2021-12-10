export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
}

interface Profile {
  id: string,
  username: string,
  avatar_url: string,
}


export interface SignInResponse {
  token: string
  user: {
    id: string,
    account_id: string,
    profile?: Profile,
  }
}

export interface RefrashTokenResponse {
  token: string;
  user: {
    id: string,
    account_id: string,
    profile?: Profile,
  }
}