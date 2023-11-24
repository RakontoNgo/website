import Image from 'next/image';
import Link from 'next/link';
import urlForImage from '../../../../sanity/lib/image';

const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative items-center w-full h-[500px]">
        <Image
          className="object-cover object-left"
          src={urlForImage(value)
            .fit('crop')
            .crop('focalpoint')
            .quality(80)
            .url()}
          alt="Blog Post Image"
          fill
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc  flex flex-col space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 list-decimal flex flex-col space-y-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-bayon text-[50px] leading-none text-primary md:text-[90px] xl:text-[120px] uppercase">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-josefin uppercase text-secondary text-[18px] leading-none  md:text-[20px] my-5">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-josefin uppercase text-secondary text-[16px] leading-none  md:text-[18px] my-5">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl  pb-5 pt-10 font-benchnine lg:text-4xl font-extrabold">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="whitespace-pre-line my-4 font-light text-[16px]  lg:text-[18px]">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-primary pl-2 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      let rel;
      if (value.href) {
        rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      }

      return (
        <div>
          {value.href && (
            <Link
              href={value.href}
              rel={rel}
              target="_blank"
              className="underline decoration-primary  text-primary"
            >
              {children}
            </Link>
          )}
        </div>
      );
    },
  },
};

export default RichTextComponents;
