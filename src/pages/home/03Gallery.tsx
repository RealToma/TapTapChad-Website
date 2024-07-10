import { Box } from "@mui/material";
import styled from "styled-components";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { dataNFTsGallery } from "../../data/nfts";

const Gallery = () => {
  return (
    <StyledComponent id="gallery">
      <TextHead>Meme Gallery</TextHead>
      <SectionSwiper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          wrapperClass="py-[10rem] relative"
        >
          {dataNFTsGallery.map((each, index) => {
            return (
              <CustomSwiperSlide key={index}>
                <SectionImage>
                  <img src={each.img} width={"100%"} alt="nft" />
                </SectionImage>
                <SectionDescription>
                  <TextNFTName>{each.name}</TextNFTName>
                  <TextNFTDescription>{each.description}</TextNFTDescription>
                </SectionDescription>
              </CustomSwiperSlide>
            );
          })}
        </Swiper>
      </SectionSwiper>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column !important;
  width: 300px !important;
  height: 400px !important;
  position: relative;
  background: black;
  border: 2px solid white !important;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 250px !important;
    height: 330px !important;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  max-width: 100%;
  aspect-ratio: 1;
  > img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SectionDescription = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 2px solid white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const TextNFTName = styled(Box)`
  display: flex;
  font-family: Belleza;
  color: white;
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const TextNFTDescription = styled(Box)`
  display: flex;

  margin-top: 10px;
  font-family: Belleza;
  color: white;
  font-size: 18px;
  @media (max-width: 600px) {
    margin-top: 5px;
    font-size: 15px;
  }
`;

const TextHead = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SectionSwiper = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export default Gallery;
