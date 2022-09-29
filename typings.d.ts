interface Library {
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  logo: {
    asset: {
      url: string;
    };
  };
  creatorName: string;
  creatorImage: {
    asset: {
      url: string;
    };
  };
}
