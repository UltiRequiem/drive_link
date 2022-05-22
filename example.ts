import { driveLink } from "./mod.ts";

console.log(
  driveLink(
    "https://drive.google.com/file/d/1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh/view?usp=sharing",
  ),
);

//=> "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh"
