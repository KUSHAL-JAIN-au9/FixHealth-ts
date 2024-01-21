import { TextInput } from "flowbite-react";

import { SiMinutemailer } from "react-icons/si";

const Input = () => {
  return (
    <div className="max-w-md text-white">
      <div className="mb-2 block"></div>
      <TextInput
        id="email4"
        placeholder="name@flowbite.com"
        required
        rightIcon={SiMinutemailer}
        type="email"
      />
    </div>
  );
};

export default Input;