export interface CommunitiesInterface {
  data?: CommunityInterface[] | undefined;
  isLoading?: boolean;
  error?: boolean;
  message?: string | undefined;
  status?: number | undefined;
}

export interface CommunityInterface {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export interface TabsInterface {
  activeTab: number;
}

export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
  imgUrl?: string;
}

export interface HomesInterface {
  data?: Home[] | undefined;
  isLoading?: boolean;
  error?: boolean;
  message?: string | undefined;
  status?: string | undefined;
}
