export interface Meta {
  _page: number;
  _per_page: number;
  _next_page: number;
  _previues_page: number;
  _total_pages: number;
  _total_items: number;
}

export interface Paginated<T = Record<string, any>> {
  meta: Meta,
  data: T[]
}

export interface BaseQuery {
  _page?: number,
  _per_page?: number
}

export interface ErrorApi {
  error?:{
    message: string,
    name: string
  }
  errors?: {
    field: string
    type: string,
    error_messages: string[]
  }
}