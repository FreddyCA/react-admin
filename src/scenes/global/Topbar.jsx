import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import { LightModeOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlinedIcon } from "@mui/icons-material/DarkModeOutlined";
import { NotificationsOutlinedIcon } from "@mui/icons-material/NotificationsOutlined";
import { SettingsOutlinedIcon } from "@mui/icons-material/SettingsOutlined";
import { PersonOutlinedIcon } from "@mui/icons-material/PersonOutlined";
// import { Search } from "@mui/icons-material/Search";
import { GridSearchIcon } from "@mui/x-data-grid";
import { LightMode } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search bar   */}
      <Box
        display="flex"
        backgroundcolor={colors.primary[700]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <GridSearchIcon color="action"></GridSearchIcon>
        </IconButton>
      </Box>

      <Box display={"flex"}>
        <IconButton>
          <LightMode></LightMode>
        </IconButton>
        <IconButton>
          <LightModeIcon></LightModeIcon>
        </IconButton>

        {/* <IconButton>
            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon></PersonOutlinedIcon>
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Topbar;
