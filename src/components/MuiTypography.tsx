import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione est
        iure voluptatem quasi. Incidunt, temporibus reiciendis. Porro
        consequuntur rem ad incidunt odit! Id itaque impedit tempora quidem,
        praesentium mollitia aliquid.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos ut
        expedita cumque totam temporibus ea sed inventore. Id, esse
        perspiciatis? Harum pariatur modi asperiores consequatur sint repellat
        dolorum nulla!
      </Typography>
    </>
  );
};
