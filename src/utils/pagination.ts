export const getValidPage = (pageNumber: number, numberOfPages: number) => {
  const isValidPage =
    !Number.isInteger(pageNumber) ||
    pageNumber < 1 ||
    pageNumber > numberOfPages;

  return isValidPage;
};
