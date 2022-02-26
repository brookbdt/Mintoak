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
