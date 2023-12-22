import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { getCommunities } from "app/thunks/getCommunities";
import { useCommunitiesSelector } from "app/selectors/communities";
import {
  CommunitiesInterface,
  CommunityInterface,
  HomesInterface,
} from "features/interface";
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
import fallbackImage from "assets/noImage.png";
import { sortByProperty } from "features/functions";
import { getHomes } from "app/thunks/getHomes";
import { useHomesSelector } from "app/selectors/homes";
import { setModalOpen } from "app/reducers/actions";

const Communities: FC<CommunitiesInterface> = () => {
  const [brokenImgUrls, setBrokenImgUrls] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const communities: CommunitiesInterface = useCommunitiesSelector();
  const homes: HomesInterface = useHomesSelector();
  const { data }: { data?: CommunityInterface[] | undefined } = communities;

  const [updatedCommunities, setUpdatedCommunities] =
    useState<CommunitiesInterface[]>();

  const toast = useToast();
  const { error, message, status } = communities;

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
  }, [error, toast]);

  useEffect(() => {
    dispatch(getCommunities() as any);
    dispatch(getHomes() as any);
    const updatedCommunity = calculateAveragePrices();
    setUpdatedCommunities(updatedCommunity as any);
  }, [dispatch]);

  const handleBrokenImg = (url: string) => {
    setBrokenImgUrls((prevBrokenUrls) => [...prevBrokenUrls, url]);
  };

  const calculateAveragePrices = () => {
    const communityPrices: {
      [key: string]: { totalPrice: number; count: number };
    } = {};

    // Calculate total prices and counts for each community
    homes?.data?.forEach((home) => {
      const { communityId, price } = home;
      if (!communityPrices[communityId]) {
        communityPrices[communityId] = { totalPrice: 0, count: 0 };
      }
      communityPrices[communityId].totalPrice += price;
      communityPrices[communityId].count++;
    });

    // Calculate average prices for each community
    const communitiesWithAveragePrice = data?.map(
      (community: CommunityInterface) => {
        const { id, imgUrl, name, group } = community;
        const communityId = id;
        const totalPrice = communityPrices[communityId]?.totalPrice || 0;
        const count = communityPrices[communityId]?.count || 0;
        const averagePrice = count > 0 ? totalPrice / count : totalPrice;

        return {
          id,
          name,
          imgUrl,
          group,
          avgPrice: averagePrice.toFixed(2),
        };
      }
    );

    return communitiesWithAveragePrice;
  };

  //Sorted Communities
  const sortedCommunities: CommunityInterface[] = sortByProperty<any>(
    updatedCommunities as any,
    "group"
  );

  return (
    <>
      {sortedCommunities?.map(
        ({ id, name, imgUrl, group, avgPrice }: CommunityInterface) => (
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
                  <Heading size="md">{name}</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem consequatur quos quam ex aliquid illum possimus et rem
                    dolorem deleniti?
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {group}
                  </Text>
                  <Text color="green.600" fontSize="2xl">
                    Average Price: C${avgPrice}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => dispatch(setModalOpen(true))}
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

export default Communities;
