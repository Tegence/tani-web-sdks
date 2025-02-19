import { StoryFn, Meta } from "@storybook/react";

import CompareFaces from '../components/CompareFaces'

export default {
    title: "ReactComponentLibrary/compareFaces",
    component: CompareFaces,
  } as Meta<typeof CompareFaces>;
  
  const Template: StoryFn<typeof CompareFaces> = () => <CompareFaces />;
  
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