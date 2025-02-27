import { StoryFn, Meta } from "@storybook/react";

import { CompareFaces } from "../components/CompareFaces";
import { TaniAuth } from "../components/controllers/TaniAuth";

export default {
  title: "ReactComponentLibrary/compareFaces",
  component: CompareFaces,
} as Meta<typeof CompareFaces>;

const authInstance = new TaniAuth("", "");
const handleSuccess = (result: string | number) => {
  console.log(result);
};

const Template: StoryFn<typeof CompareFaces> = () => (
  <CompareFaces
    authInstance={authInstance}
    onSuccess={handleSuccess}
    imageUrl="https://res.cloudinary.com/df7ovxux0/image/upload/v1654623190/cld-sample.jpg"
  />
);

export const CompareTest = Template.bind({});
// CompareTest.args = {
//   title: "Default theme",
//   theme: "primary",
//   testIdPrefix: "compare",
// };

export const CompareSecondary = Template.bind({});
// CompareSecondary.args = {
//   title: "Secondary theme",
//   theme: "secondary",
//   testIdPrefix: "compare",
// };
