import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("Test resize endpoint", () => {
  describe("Validate resize endpoint parameters", () => {
    it("Should fail with status 400 due to not sending required parameters", async () => {
      const response = await request.get("/api/image/resize");
      expect(response.status).toBe(400);
    });

    it("Should fail with status 400 due to sending invalid width parameter", async () => {
      const response = await request.get(
        "/api/image/resize?width=tt&height=100&filename=image.jpg"
      );
      expect(response.status).toBe(400);
    });

    it("Should success with valid parameters", async () => {
      const response = await request.get(
        "/api/image/resize?width=200&height=100&filename=image.jpg"
      );
      expect(response.status).toBe(200);
    });

    it("Should success with capital letters in parameters' names", async () => {
      const response = await request.get(
        "/api/image/resize?Width=200&HEIGHT=100&filename=image.jpg"
      );
      expect(response.status).toBe(200);
    });

    it("Expect to resize image mobile.png with width=300 and height=200", async () => {
      const response = await request.get(
        "/api/image/resize?width=300&height=200&filename=mobile.png"
      );
      expect(response.status).toBe(200);
    });
  });
});
