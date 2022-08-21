import fs, { promises as fsPromises } from "fs";
const thumbnailsDirPath = "./assets/thumbnails";
const imagesDirPath = "./assets/images";

const createThumbnailsDirectoryIfnotExists = async (): Promise<boolean> => {
  let found = false;

  try {
    //Check directory permission and also if directory is found
    await fsPromises.access(
      thumbnailsDirPath,
      fs.constants.R_OK | fs.constants.W_OK
    );
    found = true;
  } catch {
    // Directory not found
    try {
      // Create directory if not found
      fsPromises.mkdir(thumbnailsDirPath);
      found = true;
    } catch (error) {
      found = false;
    }
  }
  return found;
};

// Ckeck if an image with a specific name is exists or not
const checkIfImageExistsInImages = async (
  filename: string
): Promise<boolean> => {
  let found = false;
  try {
    await fsPromises.access(imagesDirPath + "/" + filename, fs.constants.R_OK);
    found = true;
  } catch (error) {
    found = false;
  }
  return found;
};

// Ckeck if a resized image with the specified width and height is exists in thumbnails or not
const checkIfImageExistsInThumbnails = async (
  resizedImageName: string
): Promise<boolean> => {
  let found = false;
  await createThumbnailsDirectoryIfnotExists();

  try {
    await fsPromises.access(
      thumbnailsDirPath + "/" + resizedImageName,
      fs.constants.R_OK
    );
    found = true;
  } catch (error) {
    found = false;
  }
  return found;
};

//https://stackoverflow.com/questions/10865347/node-js-get-file-extension
const getFileExtension = (filename: string): string => {
  const i: number = filename.lastIndexOf(".");
  return i < 0 ? "" : filename.substring(i);
};

const getResizedImageName = (
  filename: string,
  width: string,
  height: string
): string => {
  const fileExtension: string = getFileExtension(filename);

  const filenameWithoutExtension: string = filename.replace(fileExtension, "");

  const newFileName: string =
    filenameWithoutExtension + "_" + width + "x" + height + fileExtension;

  return newFileName;
};

export {
  createThumbnailsDirectoryIfnotExists,
  checkIfImageExistsInImages,
  checkIfImageExistsInThumbnails,
  getResizedImageName,
  imagesDirPath,
  thumbnailsDirPath,
};
