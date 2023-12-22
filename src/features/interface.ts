export interface CommunitiesInterface {
  data?: CommunityInterface[] | null;
  isLoading?: boolean;
  error?: boolean;
  message?: string | null;
  status?: number | null;
}

export interface CommunityInterface {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}
