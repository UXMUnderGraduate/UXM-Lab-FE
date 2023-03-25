import CardList from '@/components/members/CardList';
import Heading from '@/components/ui/Heading';

export default function Members() {
  return (
    <>
      <Heading>Members</Heading>
      <article className="member-article">
        <CardList />
      </article>
    </>
  );
}
