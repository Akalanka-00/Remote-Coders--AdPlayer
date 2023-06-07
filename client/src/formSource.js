export const userInputs = [
  {
    id: "Fname",
    label: "First name",
    type: "text",
    placeholder: "Akalanka",
  },
  {
    id: "Lname",
    label: "Last name",
    type: "text",
    placeholder: "Appuhamy",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "akalankaappuhamy@gmail.com",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
  {
    id: "privilage1",
    label: "Privilage Help Center",
    type: "dropbox",
    options: [
      { label: "True", value: true },
      { label: "False", value: false },
    ],
  },
  {
    id: "privilage2",
    label: "Privilage Finance",
    type: "dropdown",
    options: [
      { label: "True", value: true },
      { label: "False", value: false },
    ],
  },
  {
    id: "privilage3",
    label: "Privilage For Games Handling",
    type: "dropdown",
    options: [
      { label: "True", value: true },
      { label: "False", value: false },
    ],
  },
  {
    id: "profilepic",
    label: "Profile Picture",
    type: "text",
    maxLength: 100,
  },
];
