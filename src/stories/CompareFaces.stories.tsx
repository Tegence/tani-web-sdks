import { StoryFn, Meta } from "@storybook/react";

import CompareFaces from '../components/CompareFaces'
import { TaniAuth } from "../components/controllers/TaniAuth";

export default {
    title: "ReactComponentLibrary/compareFaces",
    component: CompareFaces,
  } as Meta<typeof CompareFaces>;

  const authInstance = new TaniAuth('ykru2gKctIAmpLETxx0buQ', 'd2ea1214-22fd-4512-9844-577bdab9ccd5');
  const handleSuccess = (result:string | number) => {
    console.log(result)
  }
  
  const Template: StoryFn<typeof CompareFaces> = () => <CompareFaces authInstance={authInstance} onSuccess={handleSuccess}/>;
  
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