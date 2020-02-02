import React from 'react';
import PageLayout from '../../components/PageLayout';

const HomePage = () => {
  const option = ['test', 'test1', 'test2']
  return (
    <PageLayout>
      {option.map((item, index) => <div key={item}><span>{index}</span> {item}</div>)}
      <div className="wrapper row" />
    </PageLayout>
  );
};

export default HomePage;
