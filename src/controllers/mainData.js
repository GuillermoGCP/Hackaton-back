import getMainInfo from '../models/getMainInfo.js';

const mainData = async (req, res, next) => {
  try {
    const mainData = await getMainInfo();

    if (!mainData) {
      res.send({
        status: 'ok',
        data: {
          message: 'No hay información',
        },
      });
      return;
    }
    res.send({
      status: 'ok',
      mainData,
    });
  } catch (error) {
    next(error);
  }
};
export default mainData;
