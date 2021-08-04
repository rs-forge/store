/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
};

/**  @model  */
export type Band = {
  __typename?: 'Band';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  /**
   * @oneToMany(field: 'band', key: 'bandId')
   * @oneToMany(field: 'band')
   */
  members: Array<Member>;
  /**
   * @oneToMany(field: 'band', key: 'bandId')
   * @oneToMany(field: 'band')
   */
  releases: Array<Release>;
};


/**  @model  */
export type BandMembersArgs = {
  filter?: Maybe<MemberFilter>;
};


/**  @model  */
export type BandReleasesArgs = {
  filter?: Maybe<ReleaseFilter>;
};

export type BandFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  and?: Maybe<Array<BandFilter>>;
  or?: Maybe<Array<BandFilter>>;
  not?: Maybe<BandFilter>;
};

export type BandResultList = {
  __typename?: 'BandResultList';
  items: Array<Maybe<Band>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type BandSubscriptionFilter = {
  and?: Maybe<Array<BandSubscriptionFilter>>;
  or?: Maybe<Array<BandSubscriptionFilter>>;
  not?: Maybe<BandSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
};

export type CreateBandInput = {
  name: Scalars['String'];
};

export type CreateMemberInput = {
  name: Scalars['String'];
  instruments: Array<Instrument>;
  bandId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateReleaseInput = {
  name: Scalars['String'];
  type: ReleaseType;
  year: Scalars['Int'];
  bandId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateTrackInput = {
  name: Scalars['String'];
  length: Scalars['String'];
  index: Scalars['Int'];
  releaseId?: Maybe<Scalars['GraphbackObjectID']>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export enum Instrument {
  Lead = 'LEAD',
  Rhythm = 'RHYTHM',
  Bass = 'BASS',
  Keys = 'KEYS',
  Vocals = 'VOCALS',
  BackingVocals = 'BACKING_VOCALS',
  Drums = 'DRUMS',
  Percussion = 'PERCUSSION',
  Sax = 'SAX'
}

export type IntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  between?: Maybe<Array<Scalars['Int']>>;
};

/**  @model  */
export type Member = {
  __typename?: 'Member';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  instruments: Array<Instrument>;
  /** @manyToOne(field: 'members', key: 'bandId') */
  band?: Maybe<Band>;
};

export type MemberFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  instruments?: Maybe<StringInput>;
  bandId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<MemberFilter>>;
  or?: Maybe<Array<MemberFilter>>;
  not?: Maybe<MemberFilter>;
};

export type MemberResultList = {
  __typename?: 'MemberResultList';
  items: Array<Maybe<Member>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type MemberSubscriptionFilter = {
  and?: Maybe<Array<MemberSubscriptionFilter>>;
  or?: Maybe<Array<MemberSubscriptionFilter>>;
  not?: Maybe<MemberSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  instruments?: Maybe<StringInput>;
};

export type MutateBandInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
};

export type MutateMemberInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  instruments?: Maybe<Array<Maybe<Instrument>>>;
  bandId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateReleaseInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ReleaseType>;
  year?: Maybe<Scalars['Int']>;
  bandId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateTrackInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  releaseId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMember?: Maybe<Member>;
  updateMember?: Maybe<Member>;
  deleteMember?: Maybe<Member>;
  createBand?: Maybe<Band>;
  updateBand?: Maybe<Band>;
  deleteBand?: Maybe<Band>;
  createRelease?: Maybe<Release>;
  updateRelease?: Maybe<Release>;
  deleteRelease?: Maybe<Release>;
  createTrack?: Maybe<Track>;
  updateTrack?: Maybe<Track>;
  deleteTrack?: Maybe<Track>;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationUpdateMemberArgs = {
  input: MutateMemberInput;
};


export type MutationDeleteMemberArgs = {
  input: MutateMemberInput;
};


export type MutationCreateBandArgs = {
  input: CreateBandInput;
};


export type MutationUpdateBandArgs = {
  input: MutateBandInput;
};


export type MutationDeleteBandArgs = {
  input: MutateBandInput;
};


export type MutationCreateReleaseArgs = {
  input: CreateReleaseInput;
};


export type MutationUpdateReleaseArgs = {
  input: MutateReleaseInput;
};


export type MutationDeleteReleaseArgs = {
  input: MutateReleaseInput;
};


export type MutationCreateTrackArgs = {
  input: CreateTrackInput;
};


export type MutationUpdateTrackArgs = {
  input: MutateTrackInput;
};


export type MutationDeleteTrackArgs = {
  input: MutateTrackInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getMember?: Maybe<Member>;
  findMembers: MemberResultList;
  getBand?: Maybe<Band>;
  findBands: BandResultList;
  getRelease?: Maybe<Release>;
  findReleases: ReleaseResultList;
  getTrack?: Maybe<Track>;
  findTracks: TrackResultList;
};


export type QueryGetMemberArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindMembersArgs = {
  filter?: Maybe<MemberFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetBandArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindBandsArgs = {
  filter?: Maybe<BandFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetReleaseArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindReleasesArgs = {
  filter?: Maybe<ReleaseFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetTrackArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindTracksArgs = {
  filter?: Maybe<TrackFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

/**  @model  */
export type Release = {
  __typename?: 'Release';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  type: ReleaseType;
  year: Scalars['Int'];
  /**
   * @oneToMany(field: 'release', key: 'releaseId')
   * @oneToMany(field: 'release')
   */
  tracks: Array<Track>;
  /** @manyToOne(field: 'releases', key: 'bandId') */
  band?: Maybe<Band>;
};


/**  @model  */
export type ReleaseTracksArgs = {
  filter?: Maybe<TrackFilter>;
};

export type ReleaseFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  type?: Maybe<StringInput>;
  year?: Maybe<IntInput>;
  bandId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<ReleaseFilter>>;
  or?: Maybe<Array<ReleaseFilter>>;
  not?: Maybe<ReleaseFilter>;
};

export type ReleaseResultList = {
  __typename?: 'ReleaseResultList';
  items: Array<Maybe<Release>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type ReleaseSubscriptionFilter = {
  and?: Maybe<Array<ReleaseSubscriptionFilter>>;
  or?: Maybe<Array<ReleaseSubscriptionFilter>>;
  not?: Maybe<ReleaseSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  type?: Maybe<StringInput>;
  year?: Maybe<IntInput>;
};

export enum ReleaseType {
  Single = 'SINGLE',
  Ep = 'EP',
  Lp = 'LP'
}

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMember: Member;
  updatedMember: Member;
  deletedMember: Member;
  newBand: Band;
  updatedBand: Band;
  deletedBand: Band;
  newRelease: Release;
  updatedRelease: Release;
  deletedRelease: Release;
  newTrack: Track;
  updatedTrack: Track;
  deletedTrack: Track;
};


export type SubscriptionNewMemberArgs = {
  filter?: Maybe<MemberSubscriptionFilter>;
};


export type SubscriptionUpdatedMemberArgs = {
  filter?: Maybe<MemberSubscriptionFilter>;
};


export type SubscriptionDeletedMemberArgs = {
  filter?: Maybe<MemberSubscriptionFilter>;
};


export type SubscriptionNewBandArgs = {
  filter?: Maybe<BandSubscriptionFilter>;
};


export type SubscriptionUpdatedBandArgs = {
  filter?: Maybe<BandSubscriptionFilter>;
};


export type SubscriptionDeletedBandArgs = {
  filter?: Maybe<BandSubscriptionFilter>;
};


export type SubscriptionNewReleaseArgs = {
  filter?: Maybe<ReleaseSubscriptionFilter>;
};


export type SubscriptionUpdatedReleaseArgs = {
  filter?: Maybe<ReleaseSubscriptionFilter>;
};


export type SubscriptionDeletedReleaseArgs = {
  filter?: Maybe<ReleaseSubscriptionFilter>;
};


export type SubscriptionNewTrackArgs = {
  filter?: Maybe<TrackSubscriptionFilter>;
};


export type SubscriptionUpdatedTrackArgs = {
  filter?: Maybe<TrackSubscriptionFilter>;
};


export type SubscriptionDeletedTrackArgs = {
  filter?: Maybe<TrackSubscriptionFilter>;
};

/**  @model  */
export type Track = {
  __typename?: 'Track';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  length: Scalars['String'];
  index: Scalars['Int'];
  /** @manyToOne(field: 'tracks', key: 'releaseId') */
  release?: Maybe<Release>;
};

export type TrackFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  length?: Maybe<StringInput>;
  index?: Maybe<IntInput>;
  releaseId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<TrackFilter>>;
  or?: Maybe<Array<TrackFilter>>;
  not?: Maybe<TrackFilter>;
};

export type TrackResultList = {
  __typename?: 'TrackResultList';
  items: Array<Maybe<Track>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TrackSubscriptionFilter = {
  and?: Maybe<Array<TrackSubscriptionFilter>>;
  or?: Maybe<Array<TrackSubscriptionFilter>>;
  not?: Maybe<TrackSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  length?: Maybe<StringInput>;
  index?: Maybe<IntInput>;
};
