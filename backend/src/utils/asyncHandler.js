export const asyncHandler = (fn) => {
  return (req, res, next) => {
    console.log("DEBUG: next is →", next);
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.log("DEBUG: Caught error →", err);
      next(err);
    });
  };
};
