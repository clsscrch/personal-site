import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "9b9deaa2-5a5d-4ec8-96d4-3bf769febfb4", // Get this from tina.io
  token: "647eaa9954e6c0f1a119a0a77cec22af10595ef8", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/blog",
        defaultItem: () => {
          return { postedAt: new Date(), layout: "../../layouts/PostLayout.astro"}
        },
        ui: {
          filename: {
            readonly: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "postedAt",
            label: "Posted at",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: [
              {label: "Blog Post", value: "../../layouts/PostLayout.astro"},
            ],
            required: true,

          }
        ],
      },
    ],
  },
});
