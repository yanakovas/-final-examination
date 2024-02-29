type User = {
  id: number;
  name: string;
  isAdmin: boolean;
  error?: string;
};

export type UserId = User['id'];

export default User;
