import DetailCard from '@/components/admin/DetailCard';
import GridContainer from '@/components/admin/GridContainer';
import Layout from '@/components/admin/Layout';
import { getMembers } from '@/service/member';

export default async function page() {
  const member = await getMembers();
  console.log('멤버는>>>', member);
  return (
    <div className="mt-20 w-full">
      <Layout backPath="/admin">
        <GridContainer>
          {member.map((item) => (
            <DetailCard key={item.id} {...item} />
          ))}
        </GridContainer>
      </Layout>
    </div>
  );
}
