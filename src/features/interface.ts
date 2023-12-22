export interface CommunitiesInterface {
  data?: CommunityInterface[];
  isLoading?: boolean;
  error?: boolean;
  message?: any;
  status?: number;
  moreInfo?: CommunityInterface;
}

export interface CommunityInterface {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
  avgPrice?: number;
}

export interface TabsInterface {
  activeTab: number;
  isModalOpen?: boolean;
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
