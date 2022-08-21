import express from "express";
import {
  checkIfImageExistsInImages,
  checkIfImageExistsInThumbnails,
  getResizedImageName,
  imagesDirPath,
  thumbnailsDirPath,
} from "../utilities/image-processing";
import {
  query,
  Result,
  ValidationError,
  validationResult,
} from "express-validator";
import sharp from "sharp";

const imgRoutes = express.Router();

//https://express-validator.github.io/docs/index.html
const validations = [
  // Validate that 'width' parameter is exist
  query(
    "width",
    "Resize 'width' must be specified in request parameters!"
  ).exists(),

  // Validate that 'height' parameter is exist
  query(
    "height",
    "Resize 'height' must be specified in request parameters!"
  ).exists(),

  // Validate that 'filename' parameter is exist
  query(
    "filename",
    "Image 'filename' must be specified in request parameters!"
  ).exists(),

  // Validate that 'width' parameter is a valid integer
  query("width", "Resize 'width' must be a valid integer!").isInt(),

  // Validate that 'height' parameter is a valid integer
  query("height", "Resize 'height' must be a valid integer!").isInt(),
];

imgRoutes.get(
  "/resize",
  validations,
  async (req: express.Request, res: express.Response): Promise<unknown> => {
    // Find image parameters validation errors in the request and wrap them in an object
    const validationErrors: Result<ValidationError> = validationResult(req);

    if (!validationErrors.isEmpty())
      return res.status(400).json({ errors: validationErrors.array() });

    // get resize request parameters
    const imgName: string = req.query.filename as string;
    const imgWidth: string = req.query.width as string;
    const imgHeight: string = req.query.height as string;

    // check if original image found
    const found: boolean = await checkIfImageExistsInImages(imgName);
    if (found) {
      // check if resized image found with specified width ans height
      const newFileName: string = getResizedImageName(
        imgName,
        imgWidth,
        imgHeight
      );

      const thumnailFound: boolean = await checkIfImageExistsInThumbnails(
        newFileName
      );

      if (!thumnailFound) {
        sharp(imagesDirPath + "/" + imgName)
          .resize(parseInt(imgWidth), parseInt(imgHeight))
          .toFile(thumbnailsDirPath + "/" + newFileName, function (err) {
            if (err) {
              res.sendStatus(500);
              return;
            }
            res.sendFile("assets/thumbnails/" + newFileName, { root: "." });
          });
      } else {
        res.sendFile("assets/thumbnails/" + newFileName, { root: "." });
      }
    } else {
      res.send("There is no image with the specified name.");
    }
  }
);

export default imgRoutes;
