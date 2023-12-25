export const uploadImageByURL = async (e: any) => {
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (error: any) {
      reject(error);
    }
  });

  return link.then((url) => {
    return {
      success: 1,
      file: {
        url: url,
      },
    };
  });
};

export const uploadImageByFile = () => {};
