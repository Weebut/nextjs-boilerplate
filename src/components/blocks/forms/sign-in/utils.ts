import { AuthError } from 'firebase/auth';

export async function onSignInFail(error: AuthError) {
  if (error.code === SignInFormError.USER_NOT_FOUND) {
    alert('존재하지 않는 이메일입니다.');
  } else if (error.code === SignInFormError.WRONG_PASSWORD) {
    alert('비밀번호가 틀렸습니다.');
  } else {
    alert(`실패했습니다.\n에러 코드 : ${error.code}`);
  }
}

enum SignInFormError {
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
}
