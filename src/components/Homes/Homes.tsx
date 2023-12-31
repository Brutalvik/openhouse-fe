import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { CommunitiesInterface, Home, HomesInterface } from "features/interface";
import {
  Card,
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
  useToast,
} from "@chakra-ui/react";
import { useHomesSelector } from "app/selectors/homes";
import { sortByType } from "features/functions";
import { getHomes } from "app/thunks/getHomes";
import { useCommunitiesSelector } from "app/selectors/communities";
import fallbackImage from "assets/noImage.png";
import { setModalOpen } from "app/reducers/actions";
import { communitiesMoreInfo } from "app/reducers/communities";

const Homes: FC<CommunitiesInterface> = () => {
  const dispatch = useAppDispatch();
  const homes: HomesInterface = useHomesSelector();
  const communities: CommunitiesInterface = useCommunitiesSelector();
  const { data }: { data?: Home[] | null } = homes;

  const [brokenImgUrls, setBrokenImgUrls] = useState<string[]>([]);
  const [updatedHomes, setUpdatedHomes] = useState<Home[]>([]);

  const toast = useToast();
  const { error, message, status } = homes;

  useEffect(() => {
    toast.closeAll();
    error &&
      toast({
        title: `Error ${status}`,
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
  }, [error, toast, message, status]);

  const handleBrokenImg = (url: string) => {
    setBrokenImgUrls((prevBrokenUrls) => [...prevBrokenUrls, url]);
  };

  useEffect(() => {
    dispatch(getHomes() as any);
  }, [dispatch]);

  useEffect(() => {
    const updatedHomesWithUrl: any = data?.map((home) => {
      const foundCommunity = communities?.data?.find(
        (community) => community.id === home.communityId
      );

      if (foundCommunity) {
        return {
          ...home,
          imgUrl: foundCommunity.imgUrl,
        };
      }
      return home;
    });

    setUpdatedHomes(updatedHomesWithUrl);
  }, [communities, homes, data]);

  const handleMoreInfo = (communityId: string) => {
    const community = communities?.data?.find(
      (community) => community.id === communityId
    );
    dispatch(setModalOpen(true));
    dispatch(communitiesMoreInfo(community));
    return community;
  };

  //Sorted Homes
  const sortedHomes: HomesInterface[] = sortByType<any>(updatedHomes as Home[]);

  return (
    <>
      {sortedHomes?.map(
        ({ id, communityId, price, area, type, imgUrl }: any) => (
          <GridItem key={id}>
            <Card maxW="sm" variant="filled">
              <CardBody>
                <Image
                  src={brokenImgUrls.includes(imgUrl) ? fallbackImage : imgUrl}
                  alt="image"
                  onError={() => handleBrokenImg(imgUrl)}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{type}</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Price : C${price}
                  </Text>
                  <Text color="green.600" fontSize="2xl">
                    Area : {area} Sqft.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleMoreInfo(communityId)}
                  >
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

export default Homes;
