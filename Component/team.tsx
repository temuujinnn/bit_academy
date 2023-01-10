import {
  Heading,
  Image,
  SimpleGrid,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

const teamData = [
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Б.Батжин",
    role: "INFLUENCE & COMMUNICATION MENTOR",
    info: `   Батжин нь 2015 оноос хойш бусдад өгье, хуваалцья гэсэн сэтгэлгээгээр өдий хүрсэн бөгөөд өдгөө 12 компани үүсгэсэн, бизнесийн салбарт тэр тусмаа нийгэмд ээлтэй бизнесийг Монгол улсад түгээн дэлгэрүүлж боловсролын технологийн салбарт ТЭСРЭЛТ авчрахаар ажиллаж байна.
Тэрээр боловсролын салбарт 12 дахь жилдээ ажиллаж байгаа бөгөөд хуримтлуулсан арвин их туршлагаасаа Bit Academy-ийн сурагчдад хуваалцахаар шийдсэн байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Ө.Тодсүрэн",
    role: "SYSTEM MENTOR",
    info: ` Тодсүрэн нь 2015 оноос хойш инженерчлэлийн салбарт хөл тавьсан, 2021 оноос эхлэн Томүжин Технологи компанийг хамтран үүсгэн байгуулцаж байгаа ELFC, NFT.mn, ELF Wallet, Tiny Battle зэрэг төслүүдийг ахлан хөгжүүлж байгаа бөгөөд Bit Academy-д мэддэг бүхнээ өгөхөөр шийдсэн байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "З.Заяадэлгэр",
    role: "TECHNOLOGY MENTOR",
    info: ` Заяадэлгэр нь 2012 оноос хойш технологийн салбарт ажиллаж байгаа Монгол улсын томоохон системийн нэг EMART, SKY, ONIS зэрэг худалдааны системүүд хөгжүүлэхэд гүйцэтгэх болон багийг удирдан ажиллаж байв. Тэрээр 2019 оноос хойш Томүжин Технологи компанийг хамтран үүсгэн байгуулж өдгөө Yoda, TASS, Tiny Social Learning, Tiny Battle зэрэг боловсролын старт-апуудыг хөгжүүлэн ажиллаж байна.
Тэрээр өдий олон жил хуримтлуулсан технологийн туршлага, алдаа онооноосоо хуваалцахаар Bit Academy-д үнэ цэнээ түгээхээр шийдсэн байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "О.Анар-Од",
    role: "PROCESS & COMMUNICATION MENTOR",
    info: `Анар-Од нь 2015 оноос хойш Томүжин Академи, ELF EDUCATION, ELF NEXT DOOR зэрэг боловсролын салбарт түүчээлж буй томоохон компаниудыг үүсгэн байгуулцаж байсан арвин их туршлагатай.
Тэрээр 2021 оноос эхлэн технологийн салбарт үнэ цэнээ хуваалцахаар орж ирсэн бөгөөд арвин их туршлагаасаа хуваалцахаар Bit Academy-д MENTOR-лохоор шийдсэн байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Б.Төгөлдөр",
    role: "PROCESS MENTOR",
    info: ` Төгөлдөр нь 2021 оноос эхлэн Томүжин Технологи компанийг үүсгэн байгуулцаж байгаа бөгөөд NFT.mn, Tiny Battle төслүүд дээр арт директ хийж хэрэглэгч нарт юуг, яаж хүргэхийг тодорхойлж байна. Тэрээр Bit Academy-д үнэ цэнээ хуваалцахаар болсон байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Х.Намсрай",
    role: `TECHNOLOGY`,
    info: `Намсрай нь 2021 оноос эхлэн Томүжин Технологи компанийг үүсгэн байгуулцаж байгаа Tiny Social Learning, Tiny Battle зэрэг томоохон старт-апуудыг үүсгэн байгуулцаж, хөгжүүлж, бүтээлцэж байгаа бөгөөд технологийн ертөнц дахь алдаа оноо, туршлагаасаа Bit Academy-ийн сурагчдад хуваалцахаар харц шулуудсан байна`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Ч.Тэмүүжин",
    role: "TECHNOLOGY & COMMUNICATION MENTOR",
    info: ` Тэмүүжин нь 2021 оноос эхлэн Томүжин Технологи компанийг үүсгэн байгуулцаж байгаа бөгөөд NFT.mn, ELF Wallet зэрэг блокчейн төслүүдийг ахлан гүйцэтгэж байгаа арвин туршлагатай.
Тэрээр өөрийн цаг заваа зориулан Bit Academy-ийн сурагчиддаа мэддэг, чаддаг бүхнээ зориулахаар шийдсэн байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Б.Цэрэнтогтох",
    role: "TECHNOLOGY & SYSTEM MENTOR",
    info: `Цэрэнтогтох нь 2021 оноос эхлэн Томүжин Технологи компанийг үүсгэн байгуулцаж байгаа бөгөөд Tiny Social Learning, Tiny Battle зэрэг тоглоомийн төслүүдийн системийн архитектур, логикийг гарган явж байна.
Тэрээр өөрийн цаг заваа зориулан Bit Academy-ийн сурагчиддаа мэддэг, чаддаг бүхнээ зориулахаар зориж байна.`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "У.Чингүн",
    role: "TECHNOLOGY MENTOR",
    info: `Чингүн нь 9-р ангиасаа эхлэн програмчлал, кодинг, компьютерийн шинжлэх ухааны салбарт гар дүрсэн бөгөөд өдгөө ELFC, NFT.mn, Tiny Battle зэрэг төслүүдийн системийн архитектур, инженерчлэлийг хийж байгаа бөгөөд өөрийн мэдлэг, туршлага, KNOW HOW-оосоо хуваалцахаар Bit Academy-д MENTOR-лохоор болсон байна.
`,
  },
];

const TeamCard = ({ user }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <VStack
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      h="500px"
      w="100%"
    >
      <Box pos="relative" overflow="hidden">
        <Image
          src={user?.img}
          border="1px solid #F0B91B"
          borderRadius={"5px"}
        />

        <Box
          pos="absolute"
          top="0"
          bg="rgba(0,0,0,0.7)"
          h="100%"
          w="100%"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          backdropFilter="blur(2px)"
          color="white"
          fontSize="sm"
          p={3}
          fontWeight="light"
          textAlign="justify"
          transition={"ease-out 0.3s"}
          opacity={0}
          _hover={{ opacity: 1 }}
          // overflowY="scroll"
        >
          {user?.info}
        </Box>
      </Box>

      <VStack alignItems="flex-start" spacing={0} w="100%">
        <Text color="white" fontWeight="bold" fontSize="lg">
          {user?.name}
        </Text>
        <Text color="white" fontWeight="regular" fontSize="xs">
          {user?.role}
        </Text>
      </VStack>
    </VStack>
  );
};

export const Team = () => {
  return (
    <VStack w={["100%", "90%", "50%"]} p={3} pt={9}>
      <Heading color="white" fontWeight={"bold"}>
        {"МАНАЙ БАГ"}
      </Heading>
      <SimpleGrid w="100%" columns={[1, 1, 2, 2, 3]} spacing={5}>
        {teamData.map((el, idx) => (
          <TeamCard key={`team_${idx}`} user={el} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
