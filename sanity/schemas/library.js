export default {
  name: "library",
  title: "Library",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "creatorName",
      title: "Creator Name",
      type: "string",
    },
    {
      name: "creatorImage",
      title: "Creator Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "documentation",
      title: "Documentation",
      type: "blockContent",
    },
  ],
};
