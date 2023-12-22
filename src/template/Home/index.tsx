import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";
import Modal from "../../components/Modal";
import * as S from "./styles";
import type { ImageProps } from "../../utils/types";
import Base from "template/Base";
type HomeProps = {
  images: ImageProps[];
};

const Home: React.FC<HomeProps> = ({ images }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Base>
          <S.ImageContainer>
            <S.ImageOverlay>
              <Image
                src="/COICE-PERFIL.png"
                alt="Horseshoe background"
                width={620}
                height={704}
              />
            </S.ImageOverlay>
            <h1>2023 COICE Photos</h1>
            <p>
              Fotos do nosso HALLOWEEN por{" "}
              <a
                href="https://www.instagram.com/gabifelin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gabriela Felin
              </a>
              !
            </p>
          </S.ImageContainer>
            {photoId && (
              <Modal
                images={images}
                onClose={() => {
                  setLastViewedPhoto(photoId);
                }}
              />
            )}

 
              {images.map(({ id, public_id, format, blurDataUrl }) => (
                <Link
                  key={id}
                  href={`/?photoId=${id}`}
                  as={`/p/${id}`}
                  shallow
                  passHref
                >
                  <S.ImageContent>
                    <Image
                      alt="Coice 2023 photo"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                      width={720}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    />
                  </S.ImageContent>
                </Link>
              ))}
      </Base>
    </>
  );
};

export default Home;
