import { FC, ReactElement } from "react";
import { default as SliderSlick } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Styles } from "./styled";
import useSlider, { Props, ReceivedProps } from "./hook";

const SliderLayout: FC<Props> = ({ datas, ...props }) => {
  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "36px",
          opacity: "0.6",
        }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "36px",
          zIndex: 10,
          opacity: "0.6",
          width: "auto",
          height: "auto",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    ...props,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Styles>
      <SliderSlick {...settings}>
        {datas && datas.map((slider: ReactElement, index: number) => slider)}
      </SliderSlick>
    </Styles>
  );
};

const Slider: FC<ReceivedProps> = (props) => {
  return <SliderLayout {...useSlider(props)} />;
};
export default Slider;
