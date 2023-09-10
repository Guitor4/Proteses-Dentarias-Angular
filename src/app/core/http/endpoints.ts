import { backendEndpoint } from 'app/environments/default.environment';

export const endpoints = {
  //Área de Autenticação
  //Área de Autenticação
  LOGIN: `${backendEndpoint}/auth/login`,
  RESET_PASSWORD: `${backendEndpoint}/auth/redefine-password`,
  //Área de Usuário
  //Área de Usuário
  USER: `${backendEndpoint}/user`,
  ALL_USERS: `${backendEndpoint}/user/all`,
  USER_SESSIONS: `${backendEndpoint}/user/session`,
};
