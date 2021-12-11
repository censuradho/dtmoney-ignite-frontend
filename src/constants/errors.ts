export const USER_REGISTRATION = {
	USER_REGISTRATION_ALREADY_EXIST: 'USER_REGISTRATION_ALREADY_EXIST',
	USER_REGISTRATION_NOT_FOUND: 'USER_REGISTRATION_NOT_FOUND',
	EMAIL_OR_PASSWORD_ARE_INCORRECT: 'EMAIL_OR_PASSWORD_ARE_INCORRECT'
}

export const PERFIL_ERRORS = {
	PERFIL_ALREADY_EXIST: 'PERFIL_ALREADY_EXIST',
}

export const ACCOUNT_ERRORS = {
	ACCOUNT_ALREADY_EXIST_USER_RELATED: 'ACCOUNT_ALREADY_EXIST_USER_RELATED',
	ACCOUNT_NOT_ACCOUNT_RELATED_USER: 'ACCOUNT_NOT_ACCOUNT_RELATED_USER'

}

export const TRANSACTION_ERRORS = {
	TRANSACTION_NOT_FOUND: 'TRANSACTION_NOT_FOUND',
}

export const SERVER_ERRORS = {
	INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
	VALIDATION_ERROR: 'VALIDATION_ERROR'
}

export const AUTHENTICATION_ERRORS = {
	AUTHENTICATION_TOKEN_NOT_FOUND: 'AUTHENTICATION_TOKEN_NOT_FOUND',
	AUTHENTICATION_TOKEN_INVALID: 'AUTHENTICATION_TOKEN_INVALID',
	AUTHENTICATION_TOKEN_EXPIRED: 'AUTHENTICATION_TOKEN_EXPIRED',
	AUTHENTICATION_REFRASH_TOKEN_INVALID: 'AUTHENTICATION_REFRASH_TOKEN_INVALID'
}

export const ERROR_CONSTANTS = {
	...USER_REGISTRATION,
	...PERFIL_ERRORS,
	...ACCOUNT_ERRORS,
	...TRANSACTION_ERRORS,
	...SERVER_ERRORS,
	...AUTHENTICATION_ERRORS
}

export const errorMessages = {
  [ERROR_CONSTANTS.EMAIL_OR_PASSWORD_ARE_INCORRECT]: 'Email ou senha incorretos',
	[ERROR_CONSTANTS.USER_REGISTRATION_NOT_FOUND]: 'Email ou senha incorretos',
	[ERROR_CONSTANTS.AUTHENTICATION_REFRASH_TOKEN_INVALID]: 'Sessão expirada',
	[ERROR_CONSTANTS.AUTHENTICATION_TOKEN_EXPIRED]: 'Sessão expirada',
	[ERROR_CONSTANTS.AUTHENTICATION_TOKEN_NOT_FOUND]: 'È nessesario o login',
	[ERROR_CONSTANTS.AUTHENTICATION_TOKEN_INVALID]: 'Não possui autorização para isso',
	[ERROR_CONSTANTS.INTERNAL_SERVER_ERROR]: 'Algo acounteceu com o servidor, contate o suporte',
	[ERROR_CONSTANTS.PERFIL_ALREADY_EXIST]: 'Já existe um perfil relacionado à conta',
	[ERROR_CONSTANTS.USER_REGISTRATION_ALREADY_EXIST]: 'Já existe uma conta relacionada a este E-mail',
	[ERROR_CONSTANTS.VALIDATION_ERROR]: 'Houveram erros de validação, revise os campos do formulário'
}
