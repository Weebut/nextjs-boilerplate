import { PostCard } from '@components/cards/post-card.component';
import { SideBarLayout } from '@components/layouts/side-bar-layout.component';
import { Group } from '@components/side-bars/side-bar.component';
import { Strip } from '@components/strips/strip.component';
import { useFirebaseUser } from '@hooks/firebase-user';
import { Box, Stack, Typography } from '@mui/material';

export function MyPageContainer() {
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

  const { user } = useFirebaseUser();

  return (
    <SideBarLayout groups={groups}>
      <Strip>
        <Box
          display="flex"
          height="100%"
          width="100%"
          flexDirection="column"
          py={12}
        >
          <Box width="100%">
            <Typography variant="h5">안녕하세요,</Typography>
            <Typography
              variant="h5"
              width="100%"
              fontWeight="bold"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace={'nowrap'}
            >
              {user?.email.split('@')[0]} 님
            </Typography>
          </Box>
        </Box>
      </Strip>
      <Strip>
        <Stack spacing={4} display="flex" width="100%" flexDirection="column">
          <Stack spacing={2} display="flex" flexDirection="column">
            <Typography variant="h6" fontWeight="bold">
              대기 중인 포스트
            </Typography>
            <Typography variant="h6">
              포스트 심사 결과는 매주 수요일 발표됩니다
            </Typography>
          </Stack>
          <Box display="flex" flexWrap="wrap">
            {cards.map((card, index) => (
              <PostCard key={index} card={card} />
            ))}
          </Box>
        </Stack>
      </Strip>
    </SideBarLayout>
  );
}
