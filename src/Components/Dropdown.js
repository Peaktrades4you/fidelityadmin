import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ values, onChange, value }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={onChange}
          autoWidth
          label="Action"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values?.map((val) => (
            <Link to={val.url}>
              <MenuItem value={val.value} onClick={val.method}>
                {val.value}
              </MenuItem>
            </Link>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
