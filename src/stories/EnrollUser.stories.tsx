
import { StoryFn, Meta } from "@storybook/react";

import EnrollUser from '../components/EnrollUser'
import { TaniAuth } from "../components/controllers/TaniAuth";

export default {
    title: "ReactComponentLibrary/enrolluser",
    component: EnrollUser,
  } as Meta<typeof EnrollUser>;

  const authInstance = new TaniAuth('ykru2gKctIAmpLETxx0buQ', 'd2ea1214-22fd-4512-9844-577bdab9ccd5');
  const handleSuccess = (result:string | number) => {
    console.log(result)
  }
  
  const Template: StoryFn<typeof EnrollUser> = () => <EnrollUser  authInstance={authInstance} onSuccess={handleSuccess}/>;
  
  export const EnrollTest = Template.bind({});
  EnrollTest.args = {
    // title: "Default theme",
    // theme: "primary",
    // testIdPrefix: "enroll",
  };
  
  export const EnrollSecondary = Template.bind({});
  EnrollSecondary.args = {
    // title: "Secondary theme",
    // theme: "secondary",
    // testIdPrefix: "enroll",
  };