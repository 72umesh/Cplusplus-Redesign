const sideData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Tutorials",
    to: "/tutorials",
    children: [
      {
        label: "C++ Language",
        to: "/tutorials",
      },
      {
        label: "ASCII Codes",
        to: "/tutorials",
      },
      {
        label: "Boolean Operations",
        to: "/tutorials",
      },
      {
        label: "Numerical Bases",
        to: "/tutorials",
      },
    ],
  },
  {
    label: "References",
    to: "/reference",
    children: [
      {
        label: "C Library",
        to: "/reference",
      },
      {
        label: "Containers",
        to: "/reference",
      },
      {
        label: "Input/Output",
        to: "/reference",
      },
    ],
  },
  {
    label: "Articles",
    to: "/articles",
  },
];
export default sideData;
