import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTeacher, setAcceptTeacher] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTeacher(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept Mark as my teacher"
          control={
            <Checkbox
              checked={acceptTeacher}
              onChange={handleChange}
              size="small"
              color="secondary"
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTeacher}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Numchuck Skills"
              control={
                <Checkbox
                  value="numchuck skills"
                  checked={skills.includes("numchuck skills")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Drawing Skills"
              control={
                <Checkbox
                  value="drawing skills"
                  checked={skills.includes("drawing skills")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Dancing Skills"
              control={
                <Checkbox
                  value="dancing skills"
                  checked={skills.includes("dancing skills")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
