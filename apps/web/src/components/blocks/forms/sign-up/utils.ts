import { AuthError } from 'firebase/auth';

export async function onSignUpFail(error: AuthError) {
  if (error.code === SignUpFormError.EMAIL_ALREADY_IN_USE) {
    alert('아이디가 이미 사용 중입니다.');
    return;
  } else {
    alert(`실패했습니다.\n에러 코드 : ${error.code}`);
  }
}

enum SignUpFormError {
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
}
