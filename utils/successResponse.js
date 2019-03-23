module.exports = function successResponse({ code = 200, message = "Success", ...rest }) {
  return {
    success: true,
    code,
    message,
    ...rest,
  };
};
