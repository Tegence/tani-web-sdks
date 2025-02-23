import { StoryFn, Meta } from "@storybook/react";

import FaceRecognition from '../components/FaceRecognition'
import { TaniAuth } from "../components/controllers/TaniAuth";

export default {
    title: "ReactComponentLibrary/faceRecognition",
    component: FaceRecognition,
  } as Meta<typeof FaceRecognition>;

  const authInstance = new TaniAuth('ykru2gKctIAmpLETxx0buQ', 'd2ea1214-22fd-4512-9844-577bdab9ccd5');
  const handleSuccess = (result:string | number) => {
    console.log(result)
  }
  
  const Template: StoryFn<typeof FaceRecognition> = () => <FaceRecognition authInstance={authInstance} onSuccess={handleSuccess}/>;
  
  export const FaceTest = Template.bind({});
  // FaceTest.args = {
  //   title: "Default theme",
  //   theme: "primary",
  //   testIdPrefix: "face",
  // };
  
  export const FaceSecondary = Template.bind({});
  // FaceSecondary.args = {
  //   title: "Secondary theme",
  //   theme: "secondary",
  //   testIdPrefix: "face",
  // };