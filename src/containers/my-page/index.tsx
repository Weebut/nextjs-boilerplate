import { PostCard } from '@components/cards/post-card.component';
import { SideBarLayout } from '@components/layouts/side-bar-layout.component';
import { Group } from '@components/side-bars/side-bar.component';
import { Strip } from '@components/strips/strip.component';
import { useSession } from 'next-auth/react';

export function MyPageContainer() {
  const { data: session } = useSession();

  const user = session?.user;

  // Data queried from external service
  const cards = [
    {
      title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
      description: `모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.
                  헌법개정은 국회재적의원 과반수 또는 대통령의 발의로
                  제안된다.`,
    },
    {
      title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
      description: `모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.
                  헌법개정은 국회재적의원 과반수 또는 대통령의 발의로
                  제안된다.`,
    },
    {
      title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
      description: `모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.
                  헌법개정은 국회재적의원 과반수 또는 대통령의 발의로
                  제안된다.`,
    },
    {
      title: '모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.',
      description: `모든 국민은 능력에 따라 균등하게 교육을 받을 권리를 가진다.
                  헌법개정은 국회재적의원 과반수 또는 대통령의 발의로
                  제안된다.`,
    },
  ];

  const groups: Group[] = [
    {
      icon: '🔥',
      name: '인기 카테고리',
      tabs: [
        { name: '웹 개발' },
        { name: 'React' },
        { name: 'Python' },
        { name: 'Android' },
      ],
    },
    {
      icon: '🧑‍💻',
      name: '개발',
      tabs: [
        { name: '일반 개발' },
        { name: 'Javascript' },
        { name: 'React' },
        { name: 'Vue.js' },
      ],
    },
  ];

  return (
    <SideBarLayout session={session} groups={groups}>
      <Strip>
        <div className="flex h-full w-full flex-col py-12">
          <div className="text-2xl">
            안녕하세요, <span className="font-bold">{user?.name} 님</span>
          </div>
          <div>{user?.email}</div>
        </div>
      </Strip>
      <Strip>
        <div className="flex w-full flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <span className="text-xl font-bold">대기 중인 포스트</span>
            <span className="text-sm">
              포스트 심사 결과는 매주 수요일 발표됩니다
            </span>
          </div>
          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <PostCard key={index} card={card} />
            ))}
          </div>
        </div>
      </Strip>
    </SideBarLayout>
  );
}
