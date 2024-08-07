// import React from 'react'
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  // Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
} from "@mui/material";

// For range slider
function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;



const ProductsFilters = () => {
  // For range slider
  const [value2, setValue2] = React.useState<number[]>([20, 37]);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };

  return (
    <div>
      {/* Price accordion */}
      <Accordion sx={{ width: "320px" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Price
        </AccordionSummary>
        <Divider />
        <AccordionDetails sx={{ padding: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* id="outlined-basic" */}
            <TextField label="From" variant="outlined" />
            {/* id="outlined-basic" */}
            <TextField label="To" variant="outlined" />
          </Box>
          <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={value2}
            onChange={handleChange2}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </AccordionDetails>
      </Accordion>

      {/* Brand accordion */}
      <Accordion sx={{ width: "320px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Brand
        </AccordionSummary>
        <Divider />
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          {/* id="outlined-basic" */}
          <TextField label="Search brand" variant="outlined" />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Brand-1"
            />
            <FormControlLabel required control={<Checkbox />} label="Brand-1" />
            <FormControlLabel disabled control={<Checkbox />} label="Brand-N" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Storage accordion */}
      <Accordion sx={{ width: "320px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Storage options
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Storage-1"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Storage-1"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Storage-N"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProductsFilters