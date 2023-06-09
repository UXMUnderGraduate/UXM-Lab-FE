import PublicationItem from './PublicationItem';
import { publicationType } from '@/types';

type Props = { items: publicationType[] };

export default function PublicationList({ items }: Props) {
  return (
    <ol className="publication-list">
      {items.map((item, index) => (
        <PublicationItem
          key={index}
          contents={item.contents}
          publishedDate={item.publishedDate}
          year={item.year}
          author={item.author}
          publisher={item.publisher}
        />
      ))}
    </ol>
  );
}
