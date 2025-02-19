import { StoryFn, Meta } from "@storybook/react";

import FaceRecognition from '../components/FaceRecognition'

export default {
    title: "ReactComponentLibrary/faceRecognition",
    component: FaceRecognition,
  } as Meta<typeof FaceRecognition>;
  
  const Template: StoryFn<typeof FaceRecognition> = () => <FaceRecognition />;
  
  export const FaceTest = Template.bind({});
  FaceTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "face",
  };
  
  export const FaceSecondary = Template.bind({});
  FaceSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "face",
  };