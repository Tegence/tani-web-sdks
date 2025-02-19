import { StoryFn, Meta } from "@storybook/react";

import CompareFaces from '../components/CompareFaces'

export default {
    title: "ReactComponentLibrary/compareFaces",
    component: CompareFaces,
  } as Meta<typeof CompareFaces>;
  
  const Template: StoryFn<typeof CompareFaces> = () => <CompareFaces />;
  
  export const CompareTest = Template.bind({});
  CompareTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "compare",
  };
  
  export const CompareSecondary = Template.bind({});
  CompareSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "compare",
  };