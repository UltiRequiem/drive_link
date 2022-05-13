import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.135.0/testing/asserts.ts";

import { driveLink } from "./mod.ts";

Deno.test("Main", () => {
  assertEquals(
    driveLink(
      "https://drive.google.com/file/d/1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh/view?usp=sharing",
    ),
    "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh",
  );

  assertEquals(
    driveLink("1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh"),
    "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh",
  );

  assertEquals(
    driveLink(
      "https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing",
      { apiKey: "driveLink" },
    ),
    "https://www.googleapis.com/drive/v3/files/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk?alt=media&key=driveLink",
  );
});

Deno.test("Errors", () => {
  assertThrows(
    () => {
      // @ts-ignore
      driveLink(3);
    },
    Error,
    "Invalid URL Provided.",
  );

  assertThrows(
    () => {
      driveLink("url", { apiKey: "$$$" });
    },
    Error,
    "Invalid API key provided.",
  );
});
