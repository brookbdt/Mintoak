// FIGMA LINK https://www.figma.com/file/0MnVT8fRG2VGiZoEB86o0V/Mintoak
// STRAPI PORTAL http://uat-content.mintoak.com/admin  rushabh@mindlogicsolutions.com / Rds41177

const hasWindow = typeof window !== "undefined";

const useWindowSize = () => {
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};

export { useWindowSize };
