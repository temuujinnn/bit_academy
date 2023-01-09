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
    name: "Х.Намсрай",
    role: "Software engineer",
    info: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore quas iure libero facere beatae temporibus suscipit
              quisquam possimus dolorum quis ullam animi quo iste repellat
              nesciunt doloremque fugiat! Culpa!`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Х.Намсрай",
    role: "Software engineer",
    info: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore quas iure libero facere beatae temporibus suscipit
              quisquam possimus dolorum quis ullam animi quo iste repellat
              nesciunt doloremque fugiat! Culpa!`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Х.Намсрай",
    role: "Software engineer",
    info: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore quas iure libero facere beatae temporibus suscipit
              quisquam possimus dolorum quis ullam animi quo iste repellat
              nesciunt doloremque fugiat! Culpa!`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Х.Намсрай",
    role: "Software engineer",
    info: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore quas iure libero facere beatae temporibus suscipit
              quisquam possimus dolorum quis ullam animi quo iste repellat
              nesciunt doloremque fugiat! Culpa!`,
  },
  {
    img: "https://media.discordapp.net/attachments/1000991557886947358/1061270650167242822/E8A48002-B273-4BDB-B627-C7D88FDD2757_1_105_c.jpeg",
    name: "Х.Намсрай",
    role: "Software engineer",
    info: `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              tempore quas iure libero facere beatae temporibus suscipit
              quisquam possimus dolorum quis ullam animi quo iste repellat
              nesciunt doloremque fugiat! Culpa!`,
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
          overflowY="scroll"
        >
          <video
            ref={videoRef}
            width="100%"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            controls
          />
        </Box>
      </Box>

      <VStack alignItems="flex-start" spacing={0} w="100%">
        <Text color="white" fontWeight="regular" fontSize="lg">
          {user?.name}
        </Text>
        <Text color="black" fontWeight="bold" fontSize="xs">
          {user?.role}
        </Text>
      </VStack>
    </VStack>
  );
};

export const Team = () => {
  return (
    <VStack w={["100%", "90%", "50%"]} p={3} pt={9}>
      <Heading color="white">{"Team"}</Heading>
      <SimpleGrid w="100%" columns={[1, 1, 2, 2, 3]} spacing={5}>
        {teamData.map((el, idx) => (
          <TeamCard key={`team_${idx}`} user={el} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
