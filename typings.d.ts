interface Creator {
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
}

interface Library {
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  title: string;
  description: string;
  creator: Creator;
  slug: {
    current: string;
  };
  logo: {
    asset: {
      url: string;
    };
  };
}
