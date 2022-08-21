import {
  createThumbnailsDirectoryIfnotExists,
  checkIfImageExistsInImages,
  checkIfImageExistsInThumbnails,
} from "../../utilities/image-processing";

describe("Validate directories and images existance", () => {
  it("Should create thumbnails directory if not exists", async () => {
    const foundOrCreated = await createThumbnailsDirectoryIfnotExists();
    expect(foundOrCreated).toBeTruthy();
  });

  describe("Check image existance in images directory", () => {
    it("Should be falsy as there is no image with name 'myimage.jpg'", async () => {
      const found = await checkIfImageExistsInImages("myimage.jpg");
      expect(found).toBeFalsy();
    });

    it("Should be truthy as there exists an image with name 'butterfly.jpg'", async () => {
      const found = await checkIfImageExistsInImages("butterfly.jpg");
      expect(found).toBeTruthy();
    });
  });

  describe("Check image existance in thumbnails", () => {
    it("Should be falsy as there is no image with name 'myimage_100x100.jpg'", async () => {
      const found = await checkIfImageExistsInThumbnails("myimage_100x100.jpg");
      expect(found).toBeFalsy();
    });
  });
});
