import styles from "../styles/Carousel.module.css";
import Image from "next/image";

type CarouselItemProps = {
  img: string;
  title: string;
};

const CarouselItem = ({ img, title }: CarouselItemProps) => {
  return (
    <div className={styles.item}>
      <Image src={img} width="200px" height="300px" alt=""/>

      <h3>{title}</h3>
    </div>
  );
};

type Props = {
  title: string;
  items: CarouselItemProps[];
};

export const Carousel = ({ title, items }: Props) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>

      <div className={styles.wrapper}>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </div>

    </div>
  );
};
