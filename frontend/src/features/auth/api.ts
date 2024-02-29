import Credentials from './types/Credentials';
import User from './types/User';

export async function checkUser(): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/api/auth/user')).json();
}

export async function login(credentials: Credentials): Promise<User > {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);
  return res.json();
}

export async function logout(): Promise<void> {
  await fetch('/api/auth/logout', { method: 'POST'});
}