import Link from "next/link";
import cls from "./CustomButton.module.scss";
import { Box } from "@chakra-ui/react";
import { colors } from "@/utils/constants/colors";

// display: block;
//   width: 100%;
//   padding: 10px 16px;
//   font-size: 14px;
//   line-height: 20px;
//   font-weight: 700;
//   color: #fff;
//   transform: translateZ(1000px);

export default function CustomButton({
  text,
  px,
  py,
  fs,
  lh,
  fw,
  borRad,
  minW,
  maxW,
}) {
  return (
    <Link href="#">
      <Box
        bg={colors.primary}
        color="#fff"
        textAlign='center'
        px={px}
        py={py}
        fontSize={fs}
        lineHeight={lh}
        fontWeight={fw}
        borderRadius={borRad}
        minW={minW}
        maxW={maxW}
      >
        {text}
      </Box>
    </Link>
  );
}
