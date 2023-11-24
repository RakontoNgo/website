import React from 'react';

function page() {
  return (
    <div className="h-[1380px] iframe:h-[900px] w-full flex items-center justify-center mt-24">
      <iframe
        src="https://www.helloasso.com/associations/rakonto/adhesions/devenir-membre-de-l-association/widget"
        title="Become member"
        height="100%"
        width="100%"
        allowFullScreen
        allow="payment"
        loading="eager"
      />
    </div>
  );
}

export default page;
