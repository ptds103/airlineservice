import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Select,
  FormControl,
  FormHelperText,
  Input,
  Stack,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAircraft } from "../../../../actions/aircrafts";

const EditTrue = ({ post, setEditPage }) => {
  const [airplane, setAirplane] = useState({
    tailNumber: "",
    aircraftCompany: "",
    aircraftType: "",
    generation: "",
    maxSeat: "",
  });
  const typeOfSeat = [
    {
      value: "Passenger",
    },
    {
      value: "Freighter",
    },
  ];
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateAircraft(post._id, airplane));
    setEditPage(false);
    clear();
  };
  const clear = () => {
    setAirplane({
      tailNumber: "",
      aircraftCompany: "",
      aircraftType: "",
      generation: "",
      maxSeat: "",
    });
  };
  const cancel = () => {
    setEditPage(false);
  };
  return (
    <Box
      sx={{
        width: 0.98,
        p: 2,
        m: 1.6,
        bgcolor: "white",
        color: "black",
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={28}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.tailNumber}
              value={airplane.tailNumber}
              onChange={(e) =>
                setAirplane({
                  ...airplane,
                  tailNumber: e.target.value,
                })
              }
              startAdornment={
                <InputAdornment position="start">HL</InputAdornment>
              }
            />
            <FormHelperText >
              Tail Number
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.aircraftCompany}
              value={airplane.aircraftCompany}
              onChange={(e) =>
                setAirplane({
                  ...airplane,
                  aircraftCompany: e.target.value,
                })
              }
              startAdornment={
                <InputAdornment position="start">: </InputAdornment>
              }
            />
            <FormHelperText >
              Company
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ p: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.generation}
              value={airplane.generation}
              onChange={(e) =>
                setAirplane({
                  ...airplane,
                  generation: e.target.value,
                })
              }
              startAdornment={
                <InputAdornment position="start">: </InputAdornment>
              }
            />
            <FormHelperText >
              Generation
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={25}>
        <Select
            sx={{ m: 1, width: "25ch" }}
            name="type"
            variant="standard"
            startAdornment={
              <InputAdornment position="start">TYPE: </InputAdornment>
            }
            value={airplane.aircraftType}
            onChange={(e) =>
              setAirplane({
                ...airplane,
                aircraftType: e.target.value,
              })
            }
          >
            {typeOfSeat.map((e) => (
              <MenuItem key={e.value} value={e.value}>
                {e.value}
              </MenuItem>
            ))}
          </Select>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <Input
              placeholder={post.maxSeat}
              value={airplane.maxSeat}
              onChange={(e) =>
                setAirplane({
                  ...airplane,
                  maxSeat: e.target.value,
                })
              }
              endAdornment={
                <InputAdornment position="end">People</InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={4}>
          
        </Stack>
        <Stack className="button" direction="row" spacing={40}>
          <Button
            className="buttonSubmit"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={cancel}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default EditTrue;