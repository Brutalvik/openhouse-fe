import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { getCommunities } from "app/thunks/getCommunities";
import { useCommunitiesSelector } from "app/selectors/communities";
import { CommunitiesInterface, CommunityInterface } from "features/interface";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  GridItem,
} from "@chakra-ui/react";
import fallbackImage from "assets/noImage.png";

const Communities: FC<CommunitiesInterface> = () => {
  const [brokenImgUrls, setBrokenImgUrls] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const communities: CommunitiesInterface = useCommunitiesSelector();
  const { data }: { data?: CommunityInterface[] | null } = communities;

  useEffect(() => {
    dispatch(getCommunities() as any);
  }, [dispatch]);

  const handleBrokenImg = (url: string) => {
    setBrokenImgUrls((prevBrokenUrls) => [...prevBrokenUrls, url]);
  };

  //Sorted Communities
  const sortedCommunities = data?.slice().sort((a, b) => {
    const groupA = a.group.toUpperCase();
    const groupB = b.group.toUpperCase();
    if (groupA < groupB) {
      return -1;
    }
    if (groupA > groupB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      {sortedCommunities?.map(
        ({ id, name, imgUrl, group }: CommunityInterface) => (
          <GridItem>
            <Card maxW="sm" key={id} variant="elevated">
              <CardBody>
                <Image
                  src={brokenImgUrls.includes(imgUrl) ? fallbackImage : imgUrl}
                  alt="image"
                  onError={() => handleBrokenImg(imgUrl)}
                  w="100%" // Adjust the width as needed
                  h="200px" // Adjust the height as needed
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{name}</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem consequatur quos quam ex aliquid illum possimus et rem
                    dolorem deleniti?
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {group}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    More Info
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Location
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        )
      )}
    </>
  );
};

export default Communities;
