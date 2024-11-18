import React from 'react';

function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="flex  flex-col">{children}</main>;
}

export default PageContainer;
