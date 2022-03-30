export const aboutController = {
  index: {
    handler: function (request, h) {
      const viewData = {
        title: "About Woodlamds",
      };
      return h.view("about-view", viewData);
    },
  },
};
