"use client";

import {
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function PostJob() {
  const [difficulty, setDifficulty] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState([]);

  const availableSkills = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Software Development",
  ];

  const handleChangeDifficulty = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };

  const handleChangeSkills = (event: any) => {
    const {
      target: { value },
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Container maxWidth="sm">
      <h1>Post a Job</h1>
      <form>
        <TextField
          fullWidth
          label="Job Title"
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Job Description"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={difficulty}
            label="Difficulty"
            onChange={handleChangeDifficulty}
            required
          >
            <MenuItem value="Entry Level">Entry Level</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="date"
          label="Deadline"
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="skills-multiple-chip-label">
            Required Skills
          </InputLabel>
          <Select
            labelId="skills-multiple-chip-label"
            id="skills-multiple-chip"
            multiple
            value={skills}
            onChange={handleChangeSkills}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {availableSkills.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Post Job
        </Button>
      </form>
    </Container>
  );
}
