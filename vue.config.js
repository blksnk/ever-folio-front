module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/stylesheets/_reset.scss";
          @import "@/stylesheets/fonts.scss";
          @import "@/stylesheets/variables.scss";
          @import "@/stylesheets/root.scss";
          @import "@/stylesheets/animation.scss";
        `,
      },
    },
  },
};
