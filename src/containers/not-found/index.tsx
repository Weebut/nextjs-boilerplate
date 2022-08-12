import Link from 'next/link';

export function NofFoundContainer() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-8">
      <span className="text-6xl font-bold">404</span>
      <div className="flex flex-col space-y-2 text-center">
        <span className="text-xl">{`페이지를 찾을 수 없어요 :(`}</span>
        <Link href="/">
          <a className="text-primary text-opacity-90 hover:text-opacity-100 hover:underline">
            홈으로 돌아갑니다
          </a>
        </Link>
      </div>
    </div>
  );
}
