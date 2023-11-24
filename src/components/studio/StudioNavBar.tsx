/* eslint-disable react/destructuring-assignment */

import Link from 'next/link';

function StudioNavabar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-primary flex items-center">
          Go to the website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavabar;
