
import { StoryFn, Meta } from "@storybook/react";

import EnrollUser from '../components/EnrollUser'

export default {
    title: "ReactComponentLibrary/enrolluser",
    component: EnrollUser,
  } as Meta<typeof EnrollUser>;
  
  const Template: StoryFn<typeof EnrollUser> = () => <EnrollUser />;
  
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