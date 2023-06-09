import Heading from '../../components/ui/Heading';
import PublicationList from '../../components/publications/PublicationList';
import { getPublicationAll, sortDataByYear } from '@/service/publication';

export default async function Publications() {
  const publicationList = await getPublicationAll();
  const sortData = await sortDataByYear(publicationList);
  return (
    <>
      <Heading>Publications</Heading>
      <div className="sm:mb-10">
        {sortData.map((item) => (
          <article key={item.year} className="publications-article">
            <h2 className="year">{item.year}</h2>
            <PublicationList items={item.items} />
          </article>
        ))}
      </div>
    </>
  );
}
