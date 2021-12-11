export interface CreatePerfilRequest {
  username: string;
	avatar_url?: string;
}

export interface GetPerfilResponse {
  id: string,
	username: string,
	avatar_url?: string,
	created_at: string,
	updated_at: string,
	user_id: string
}