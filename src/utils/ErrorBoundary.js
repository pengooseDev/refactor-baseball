class ErrorHandler {
  #branch;
  #error;

  errorHandler(success, fail, printError) {
    try {
      success();
    } catch (error) {
      printError(error);
      fail();
    }
  }
}

module.exports = ErrorHandler;
