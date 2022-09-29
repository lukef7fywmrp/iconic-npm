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
      name: "creator",
      title: "Creator",
      type: "reference",
      to: [{ type: "creator" }],
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
