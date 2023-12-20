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
        <S.MainContainer>
          {photoId && (
            <Modal
              images={images}
              onClose={() => {
                setLastViewedPhoto(photoId);
              }}
            />
          )}
          <S.ImageGrid>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <Link
                key={id}
                href={`/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
              >
                <a
                  ref={
                    id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                  }
                >
                  <Image
                    alt="Descrição da imagem"
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                    width={720}
                    height={480}
                  />
                </a>
              </Link>
            ))}
          </S.ImageGrid>
        </S.MainContainer>
        <S.StyledFooter>{/* ... Conteúdo do Footer ... */}</S.StyledFooter>
      </Base>
    </>
  );
};

export default Home;
