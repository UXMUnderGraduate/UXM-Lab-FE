import DetailResearchCard from '@/components/admin/DetailResearchCard';
import GridContainer from '@/components/admin/GridContainer';
import Layout from '@/components/admin/Layout';
import { getResearchAll } from '@/service/research';
import React from 'react';

export default async function page() {
  const research = await getResearchAll();
  return (
    <div className="mt-20 w-full">
      <Layout backPath="/admin">
        <GridContainer>
          {research.map((item) => (
            <DetailResearchCard key={item.id} {...item}></DetailResearchCard>
          ))}
        </GridContainer>
      </Layout>
    </div>
  );
}
