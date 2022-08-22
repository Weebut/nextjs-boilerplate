import { shortenString } from '@libs/utils/string';

interface Card {
  title: string;
  description: string;
}

interface PostCardProps {
  card: Card;
}

export function PostCard({ card }: PostCardProps) {
  const maxTitleLength = 20;
  const maxDescriptionLength = 100;

  const title = shortenString(card.title, maxTitleLength);

  const description = shortenString(card.description, maxDescriptionLength);

  return (
    <div className="relative mr-6 mb-6 h-[150px] w-[300px] rounded bg-white p-4">
      <div className="flex flex-col space-y-2">
        <span>{title}</span>
        <span className="h-[60px] w-full text-sm">{description}</span>
      </div>
      <div className="text-sm text-primary hover:underline">더보기</div>
    </div>
  );
}
