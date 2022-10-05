import { AuthError } from 'firebase/auth';

export async function onResetPasswordFail(error: AuthError) {
  if (error.code === ResetPasswordFormError.USER_NOT_FOUND) {
    alert('존재하지 않는 이메일입니다.');
  } else {
    alert(
      `실패했습니다.\n에러 코드 : ${error.code}\n에러 메시지 : ${error.message}`,
    );
  }
}

enum ResetPasswordFormError {
  USER_NOT_FOUND = 'auth/user-not-found',
}
