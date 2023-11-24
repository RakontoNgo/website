'use client';

import { useEffect, useMemo, useState } from 'react';
import useParallax from '@/utils/useParralax';
import { useScroll } from 'framer-motion';
import handleAnimate from '@/utils/handleAnimate';
import { IHomeGalleryImage, SanityImage } from '../../../../types';
import DesktopGallery from './DesktopGallery';
import MobileGallery from './MobileGallery';
import ModalGallery from './ModalGallery';

interface IProps {
  data: IHomeGalleryImage;
}

function ImagesGallery({ data }: IProps) {
  const { scrollYProgress } = useScroll();
  const [isModal, setIsModal] = useState<{
    isOpen: boolean;
    image: SanityImage | null;
  }>({
    isOpen: false,
    image: null,
  });

  const [isAnimated, setIsAnimated] = useState(false);
  const x = useParallax(scrollYProgress, -500, 100);
  const x2 = useParallax(scrollYProgress, 500, -100);
  const y = useParallax(scrollYProgress, -200, 100);
  const y2 = useParallax(scrollYProgress, 200, -100);
  const [gallery1, gallery2] = useMemo(() => {
    const half = Math.floor(data.gallery.length / 2);

    const firstHalf = data.gallery.slice(0, half);
    const secondHalf = data.gallery.slice(half);

    return [firstHalf, secondHalf];
  }, [data.gallery]);

  useEffect(() => {
    handleAnimate(setIsAnimated);
  }, [isModal.image]);

  return (
    <section className="xl:my-20  overflow-hidden flex lg:flex-col lg:space-y-2 lg:space-x-0 justify-between lg:justify-center items-center">
      {isModal.isOpen && isModal.image && (
        <ModalGallery
          gallery={data.gallery}
          setIsModal={setIsModal}
          isModal={isModal}
          isAnimated={isAnimated}
        />
      )}
      <DesktopGallery gallery={gallery1} setIsModal={setIsModal} x={x} />
      <DesktopGallery gallery={gallery2} setIsModal={setIsModal} x={x2} />

      <MobileGallery gallery={gallery1} setIsModal={setIsModal} y={y} />
      <MobileGallery gallery={gallery2} setIsModal={setIsModal} y={y2} />
    </section>
  );
}

export default ImagesGallery;
