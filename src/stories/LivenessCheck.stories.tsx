import { StoryFn, Meta } from "@storybook/react";

import {LivenessCheck} from '../components/LivenessCheck'

export default {
    title: "ReactComponentLibrary/livenessCheck",
    component: LivenessCheck,
  } as Meta<typeof LivenessCheck>;

  const handleSuccess = (result:any) => {
    console.log("story result for liveness", result)
  }
  
  const Template: StoryFn<typeof LivenessCheck> = () => <LivenessCheck onSuccess={handleSuccess} />;
  
  export const LivenessTest = Template.bind({});
  // LivenessTest.args = {
  //   title: "Default theme",
  //   theme: "primary",
  //   testIdPrefix: "liveness",
  // };
  
  export const LivenessSecondary = Template.bind({});
  // LivenessSecondary.args = {
  //   title: "Secondary theme",
  //   theme: "secondary",
  //   testIdPrefix: "liveness",
  // };