'use client';

import { Gallery } from 'next-gallery';
import { SanityImage } from '../../../../types';
import urlForImage from '../../../../sanity/lib/image';

function GalleryImage({ data }: { data: SanityImage[] }) {
  const images: { src: string; aspect_ratio: number }[] = [];

  function AspectRatio(largeur: number, hauteur: number) {
    function gcd(a: number, b: number) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    }

    const pgcd = gcd(largeur, hauteur);

    const widt = largeur / pgcd;
    const height = hauteur / pgcd;

    const aspectRatio = widt / height;

    return aspectRatio;
  }

  const getImageApsectRatio = (image: SanityImage) => {
    const parseUrl = image.asset._ref.split('-');
    const width = parseInt(parseUrl[2].split('x')[0], 10);
    const height = parseInt(parseUrl[2].split('x')[1], 10);

    const aspecRatio = AspectRatio(width, height);

    return aspecRatio;
  };

  getImageApsectRatio(data[0]);

  const generateImageArray = () => {
    for (let i = 0; i < data.length; i += 1) {
      images.push({
        src: urlForImage(data[i].asset).url(),
        aspect_ratio: getImageApsectRatio(data[i]),
      });
    }
  };

  generateImageArray();

  const widths = [500, 1000, 1600];
  const ratios = [2.5, 3, 3, 3];

  return <Gallery {...{ images, widths, ratios }} initState={false} />;
}

export default GalleryImage;
