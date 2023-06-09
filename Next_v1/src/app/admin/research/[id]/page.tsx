import Layout from '@/components/admin/Layout';
import { getResearchOne } from '@/service/research';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const research = await getResearchOne(params.id);
  console.log('리서치>>', research);
  return (
    <div className="mt-20 w-full">
      <Layout backPath="/admin/research">
        <div className="w-full">
          <div>{`title : ${research.title}`}</div>
          <div>{`contents : ${research.contents}`}</div>
          <div>{`외부링크(여러개 입력시 space로 URL을 나눠주세요) : ${research.extraAddress}`}</div>
        </div>
      </Layout>
    </div>
  );
}




// import DetailCard from '@/components/admin/DetailCard';
// import GridContainer from '@/components/admin/GridContainer';
// import Layout from '@/components/admin/Layout';
// import { getMembers } from '@/service/member';

// export default async function page() {
//   const member = await getMembers();
//   console.log('멤버는>>>', member);
//   return (
    
//   );
// }
