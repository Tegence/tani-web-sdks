import { StoryFn, Meta } from "@storybook/react";

import FaceRecognition from '../components/FaceRecognition'

export default {
    title: "ReactComponentLibrary/faceRecognition",
    component: FaceRecognition,
  } as Meta<typeof FaceRecognition>;
  
  const Template: StoryFn<typeof FaceRecognition> = () => <FaceRecognition />;
  
  export const EnrollTest = Template.bind({});
  EnrollTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "enroll",
  };
  
  export const EnrollSecondary = Template.bind({});
  EnrollSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "enroll",
  };