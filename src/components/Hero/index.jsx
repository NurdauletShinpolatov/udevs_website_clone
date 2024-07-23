import { Box } from "@chakra-ui/react";
import cls from './Hero.module.scss';
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import illustration from "@/assets/images/hero/heroIllustration.svg"
import CustomButton from "../CustomButton";

export default function Hero() {
  return(
    <section className={cls.hero}>
      <Box maxW={1170} mx="auto" px={15}>
        <div className={cls.flex}>

          <div className={cls.textContainer}>
            <Image src={logo} alt="logo" width={267} className={cls.logo}/>
            <h1 className={cls.heading}>IT-Outsourcing Company</h1>
            <span className={cls.text}>
              <p>User Interface, User Experience design</p>
            </span>
            <CustomButton
              text="Contact"
              px="16px"
              py="13px"
              lh="30px"
              fw="600"
              fs="20px"
              borRad="8px"
              minW="112px"
              maxW="248px"
            />
          </div>

          <div className={cls.imageContainer}>
            <Image src={illustration} alt="illustration" className={cls.image} />
          </div>

        </div>
      </Box>
    </section>
  )
}