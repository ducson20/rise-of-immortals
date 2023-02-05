import UserService from '@/services/user';

export interface IUseAuthProps {}

export function useAuth(options: any) {
  // Bất cứ chỗ nào trong app có nhu cầu lấy thông tin user, kg sợ call nhiều api req, cập nhật data everywhere
  // const {
  //   data: profile,
  //   error,
  //   mutate,
  // }: any = useSWR('/profile', {
  //   dedupingInterval: 60 * 60 * 1000,
  //   revalidateOnFocus: false,
  //   ...options,
  // });
  // const firstLoading = profile === undefined && error === undefined;
  // const login = async () => {
  //   const loginReq = {
  //     username: 'easy',
  //     password: '123qwe',
  //   };
  //   await UserService.signIn(loginReq);
  //   // Nếu api login response về data có thể app mutate
  //   await mutate();
  // };
  // const logout = async () => {
  //   await UserService.logout();
  //   // Xóa dữ liệu đi và không gọi lại apiÏ
  //   mutate({}, false);
  // };
  // return { firstLoading, profile, error, login, logout };
}
