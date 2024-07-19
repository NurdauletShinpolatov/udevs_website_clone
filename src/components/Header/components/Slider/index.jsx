import { Box, Flex } from "@chakra-ui/react";
import cls from "./Slider.module.scss";
import Image from "next/image";
import logoImg from "@/assets/images/header/logo.svg";
import { XIcon } from "@/assets/icons/headerIcons";
import {
  mobileHeaderLinks,
  socialMediaLinks,
} from "@/utils/constants/headerConst";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import { colors } from "@/utils/constants/colorsConst";

export default function Slider({ openSidebar, setOpenSidebar }) {
  return (
    <div className={`${cls.slider} ${openSidebar ? cls.open : ""}`}>
      <Flex
        px="20px"
        h="64px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={logoImg} alt="logo" width={96} />
        <Box w="27px" onClick={() => setOpenSidebar(false)}>
          <XIcon />
        </Box>
      </Flex>

      <Box
        // mt="19%"
        mx="auto"
        width="max-content"
        textAlign="center"
      >
        {mobileHeaderLinks.map((item) => (
          <Link key={item.id} href="#">
            <p className={cls.links}>{item.text}</p>
          </Link>
        ))}
      </Box>

      <Box mb={14}>
        <CustomButton
          text="Contact"
          px="16px"
          py="13px"
          lh="30px"
          fw="600"
          fs="20px"
          borRad="8px"
          minW="100#"
          mx="15px"
        />

        <Flex alignItems="center" my={40} justifyContent="center" gap={24}>
          {socialMediaLinks.map((item) => (
            <Flex
              key={item.id}
              h={40}
              w={40}
              borderRadius="50%"
              backgroundColor={colors.primary}
              alignItems="center"
              justifyContent="center"
            >
              {item.icon}
            </Flex>
          ))}
        </Flex>
      </Box>
    </div>
  );
}
