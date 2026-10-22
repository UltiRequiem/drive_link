import { expect, it } from "vitest";

import { driveLink } from "./index.js";

it("Main", () => {
  expect(
    driveLink(
      "https://drive.google.com/file/d/1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh/view?usp=sharing",
    ),
  ).toEqual(
    "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh",
  );

  expect(driveLink("1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh")).toEqual(
    "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh",
  );

  expect(
    driveLink(
      "https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing",
      { apiKey: "driveLink" },
    ),
  ).toEqual(
    "https://www.googleapis.com/drive/v3/files/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk?alt=media&key=driveLink",
  );
});

it("Errors", () => {
  expect(() => {
    // @ts-ignore: It should throw an error.
    driveLink(3);
  }).toThrow(Error);

  expect(() => {
    driveLink("https://ultirequiem.com");
  }).toThrow(Error);

  expect(() => {
    driveLink("url", { apiKey: "$$$" });
  }).toThrow(Error);
});
