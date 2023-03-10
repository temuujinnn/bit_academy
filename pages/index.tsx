import Head from "next/head";

import styles from "../styles/Home.module.css";
import {
  HStack,
  Flex,
  Text,
  Image,
  Button,
  VStack,
  Box,
  SimpleGrid,
  AspectRatio,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Team } from "../Component/team";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const blue = "#3b21a1";
const green = "#48ddcb";

export default function Home() {
  const data = [
    {
      title: "TECHNOLOGY",
      description:
        "Technology буюу тухайн инженерийн техник, технологийн мэдлэг,  өөрт нь тулгамдсан асуудалд ЯАЖ дээрээ гаргалгаагаа мэддэг, хийж чаддаг чадварууд энд багтана.",
    },
    {
      title: "COMMUNICATION",
      description:
        "Communication буюу тухайн инженерийн аман болон бичгэн харилцааны чадвар, ЯАГААД энэ зүйлийг хийх хэрэгтэй вэ гэж зөв асуулт асуудаг, асуултанд оновчтой хариулж өгч чаддаг чадварууд энд багтана.",
    },
    {
      title: "INFLUENCE",
      description:
        "Influence буюу тухайн инженерийн ямар цар хүрээнд бусдадаа хэрхэн нөлөөлөх, өөрийн санаа бусдадаа илтгэх, ойлгуулах, зарах чадварууд энд багтана.",
    },
    {
      title: "PROCESS",
      description:
        "Process буюу тухайн инженерийн бүтээгдэхүүн хөгжүүлэлт, компаний үйл ажиллагааны процессийг дагах, өөрчлөх, тодорхойлох буюу юуг ХЭЗЭЭ хийх хэрэгтэйг мэддэг чадварууд энд багтана.",
    },
    {
      title: "SYSTEM",
      description:
        "System буюу тухайн инженерийн бүтээгдэхүүн, үйлчилгээ, бизнес зэргийг том зураглалаар нь харж, ойлгож, хөгжүүлэх буюу ЮУГ хийх хэрэгтэй вэ гэдгийг мэддэг чадварууд энд багтана.",
    },
  ];
  const text = "24px";
  const icon = [BsFacebook, BsInstagram];
  const [scrollPos, setScrollPos] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(wrapperRef.current!.scrollTop);
    };
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      wrapperRef.current!.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <>
      <Head>
        <title>Bit Academy</title>
        <meta name="description" content="Bit academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex flexDir={"column"} w="100%" mx="auto" bg={blue}>
          <Box h="100px" />
          <HStack
            id="#home"
            w="100%"
            // bg="RGBA(0, 0, 0, 0.3)"
            bg={blue}
            zIndex="100"
            color={"black"}
            transition="ease .2s"
            boxShadow={"xl"}
            py="15px"
            pos="fixed"
            justifyContent={"center"}
          >
            <HStack w={["90%", "70%"]} justifyContent={"space-between"}>
              <Link href={"#home"}>
                <Image
                  // opacity={"1"}
                  w={["100px", "200px"]}
                  src={
                    "https://cdn.discordapp.com/attachments/1000991557886947358/1061272837555507200/Asset_6.png"
                  }
                />
              </Link>
              <Button
                // w="30%"
                borderRadius={"5px"}
                bg={green}
                color={"black"}
                textColor={blue}
                onClick={() => {
                  window.open(
                    "https://www.jotform.com/form/230051882718456",
                    "_blank"
                  );
                }}
              >
                Өргөдөл илгээх
              </Button>
            </HStack>
          </HStack>

          <VStack
            id="#more"
            // justifyContent={"space-evenly"}
            color={"white"}
            w={["90%", "70%"]}
            justifyContent={"center"}
            mx="auto"
          >
            <Image
              mx="auto"
              w="808px"
              src="https://cdn.discordapp.com/attachments/1001000360296587344/1061854189770252339/7_copy_1_2.png"
            />

            <Flex
              flexDir={"column"}
              justifyContent={"start"}
              w={["100%", "70%"]}
            >
              <Text fontSize={["32px", "85px"]} fontWeight="bold">
                КОДООС Ч ИЛҮҮГ...
              </Text>
              <Box h="20px" />
              <Text
                fontSize={["18px", text]}
                textAlign={"start"}
                w={["100%", "50%"]}
              >
                Технологи дээр суурилсан бүтээгдэхүүн бүтээх, хөгжүүлэх
                чадвартай ЖИНХЭНЭ ИНЖЕНЕР-үүдийг бид бэлтгэсээр байна...
              </Text>
              <Box h="50px" />
              <Button
                w={["100%", "30%"]}
                borderRadius={"5px"}
                bg={green}
                color={"black"}
                textColor={blue}
                onClick={() => {
                  window.open(
                    "https://www.jotform.com/form/230051882718456",
                    "_blank"
                  );
                }}
              >
                Өргөдөл илгээх
              </Button>
            </Flex>
          </VStack>
          <Box h={["50px", "200px"]} />
          <VStack ref={wrapperRef} color={"white"} w={["80%", "50%"]} mx="auto">
            <Image src="https://cdn.discordapp.com/attachments/1000991557886947358/1061278101872578580/pe8_2.png" />
            <Box h="50px" />
            <Text w="100%" fontSize={["14px", text]} textAlign={"justify"}>
              PE8 буюу Product Engineer 8 хөтөлбөр нь технологи дээр суурилсан
              бүтээгдэхүүн хөгжүүлэх, бүтээх ур чадвартай инженерийн эхлэлийг
              тавих хөтөлбөр юм. Бүтээгдэхүүнийг санаанаас нь хэрэглэгчийн гарт
              хүрэх хүртэл хөгжүүлэхэд зөвхөн програмчлалын хэл мэдэх, код бичих
              чадвар хангалтгүй, бүр ямар ч боломжгүй. Багаар ажиллах, багтайгаа
              зөв ойлголцох, бусдад санаагаа ойлгуулах, бүтээгдэхүүнээ том
              зургаар нь харах, ажлыг схем, дэс дараалалтай болгох түүнийгээ
              дагах зэрэг маш олон хувь хүний ур чадварууд хэрэгтэй байдаг.
              Үүнийг топ технологийн компаниудын үүсгэн байгуулагч, CEO,
              инженерүүд ч хэлдэг.
            </Text>
          </VStack>
          <Box h="150px" />
          <VStack id="#what" w="100%" justifyContent={"center"}>
            <VStack>
              <Text
                fontSize={["32px", "85px"]}
                color="white"
                fontWeight={"bold"}
              >
                Бид юу заах вэ?
              </Text>
            </VStack>

            <SimpleGrid
              spacing={3}
              columns={[1, 1, 2, 2, 3]}
              w={["90%", "50%"]}
              justifyContent={"center"}
              alignContent="center"
              mx="auto"
              pb="150px"
            >
              {data.map((el: any, ind: number) => {
                return (
                  <AspectRatio key={ind}>
                    <VStack>
                      <Flex className="container" w="100%" height="100%">
                        <div className="card">
                          <Flex
                            p={["20px", "40px", "40px", "70px"]}
                            w="100%"
                            h="100%"
                            justifyContent={"center"}
                            className="front"
                            // borderRadius={"12px"}
                            bg={green}
                          >
                            <Text
                              pt={["100px", 0]}
                              m={2}
                              px={2}
                              fontSize={["2xl", "3xl"]}
                              color={blue}
                              fontWeight="bold"
                            >
                              {el.title}
                            </Text>
                          </Flex>
                          <div className="back">
                            <Text
                              // fontSize={"4xl"}
                              color={blue}
                              // fontWeight="bold"
                            >
                              {el.description}
                            </Text>
                          </div>
                        </div>
                      </Flex>
                    </VStack>
                  </AspectRatio>
                );
              })}
            </SimpleGrid>
          </VStack>

          <VStack id="#team" justifyContent={"center"} mx="auto">
            <Team />
          </VStack>
          <VStack pb="100px">
            <Button
              // w="30%"
              p="10px"
              m="20px"
              borderRadius={"5px"}
              bg={green}
              color={"black"}
              textColor={blue}
              onClick={() => {
                window.open(
                  "https://www.jotform.com/form/230051882718456",
                  "_blank"
                );
              }}
            >
              Өргөдөл илгээх
            </Button>
          </VStack>

          <Divider />
          <HStack my="20px" justifyContent="space-between" px="80px">
            <Image
              w={"200px"}
              src="https://cdn.discordapp.com/attachments/1000991557886947358/1061272837555507200/Asset_6.png"
            />
            <Text color={"white"}>© 2023 Bit Academy</Text>
            <HStack>
              <Link
                href="https://www.facebook.com/bit.academy.official"
                target="_blank"
              >
                <IconButton
                  bg="none"
                  color={green}
                  aria-label="facebook"
                  icon={<BsFacebook size={"30px"} />}
                />
              </Link>
              <Link
                href="https://www.facebook.com/bit.academy.official"
                target="_blank"
              >
                <IconButton
                  bg="none"
                  color={green}
                  aria-label="facebook"
                  icon={<BsInstagram size={"30px"} />}
                />
              </Link>
              {/* {icon.map((el: any, ind: number) => {
                return (
                  <el/>
                )
              })} */}
            </HStack>
          </HStack>
        </Flex>
      </main>
    </>
  );
}
