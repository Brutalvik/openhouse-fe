import { FC, lazy } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import { useAppDispatch } from "app/hooks";
import { useActiveTabSelector } from "app/selectors/actions";
import { setActiveTab } from "app/reducers/actions";

const Content = lazy(() => import("components/Communities/Communities"));

const Sections: FC = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useActiveTabSelector();

  const selectedTab = (tab: number) => {
    dispatch(setActiveTab(tab));
  };

  const columnCount = useBreakpointValue({
    sm: 1,
    md: 3,
    lg: 4,
    xl: 5,
  });

  const margins = useBreakpointValue({
    base: { marginLeft: 2, marginRight: 2, marginBottom: 2 },
    sm: { marginLeft: 12, marginRight: 12, marginBottom: 12 },
    md: { marginLeft: 6, marginRight: 6, marginBottom: 6 },
    lg: { marginLeft: 8, marginRight: 8, marginBottom: 8 },
    xl: { marginLeft: 10, marginRight: 10, marginBottom: 10 },
  });

  return (
    <Tabs
      isFitted
      variant="enclosed"
      size="lg"
      isLazy
      onChange={(index) => selectedTab(index)}
      defaultIndex={activeTab}
    >
      <TabList mb="1em">
        <Tab _selected={{ color: "white", bg: "blue.500" }}>Communities</Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>Houses</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid
            templateColumns={`repeat(${columnCount}, 1fr)`}
            gap={6}
            {...margins}
          >
            <Content />
          </Grid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Sections;
