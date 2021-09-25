import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Work as PageComponent } from '@/components/pages/work';
import { httpClient } from '@/utils';

interface IWorkData {
  createdAt: string;
  updatedAt: string;
  workTitle: string;
  workDesc: string;
  workDescJa: string;
  workContents: {
    fieldId: string;
    title: string;
    subtitle: string;
    term: string;
    desc: string;
    titleJa: string;
    subtitleJa: string;
    termJa: string;
    descJa: string;
  }[];
}

const Work = ({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PageComponent pageData={pageData} />
);

export default Work;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await httpClient.fetchRetry<IWorkData>(`work`);

  return {
    props: {
      pageData,
    },
  };
};
