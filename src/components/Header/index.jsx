"use client"

import Logo from "@/assets/images/logo.svg";
import cls from "./Header.module.scss";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { headerLinks } from "@/utils/constants/headerConst";
import { ArrowDownIcon, BurgerIcon } from "@/assets/icons/headerIcons";
import Slider from "./components/Slider";
import { useState } from "react";

export default function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header className={cls.header}>
      <Box px="15px" mx="auto" maxW="1170px">
        <nav className={cls.nav}>
          <Link href="#">
            <Image src={Logo} width={96} alt="logo" />
          </Link>

          <UnorderedList className={cls.headerLinks}>
            {headerLinks.map((item) => (
              <ListItem
                key={item.id}
                className={`${cls.listItem} ${
                  item.isDropDown ? cls.dropDown : ""
                }`}
                position={item.isDropDown ? "relative" : ""}
              >
                {item.text}
                {item.isDropDown && (
                  <>
                    <ArrowDownIcon />
                    <UnorderedList
                      className={`${cls.dropDownOptions} ${
                        item.id == 7 ? cls.languages : ""
                      }`}
                    >
                      <p className={cls.text}>{item.text}</p>
                      {item.subitems.map((subitem) => (
                        <ListItem key={subitem.id} className={cls.subitem}>
                          <Image
                            src={subitem.icon}
                            className={cls.icon}
                            alt="icons"
                          />
                          <p className={cls.subitemText}>{subitem.text}</p>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </>
                )}
              </ListItem>
            ))}
            <CustomButton
              text="Contact"
              px="16px"
              py="10px"
              lh="20px"
              fw="700"
              fs="14px"
              borRad="8px"
              minW="112px"
              maxW="248px"
            />
          </UnorderedList>

          <span className={cls.burgerButton} onClick={() => setOpenSidebar(true)}>
            <BurgerIcon />
          </span>

          <Slider openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        </nav>
      </Box>
    </header>
  );
}
