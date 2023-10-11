import * as React from 'react';
import { ThemeProvider, styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AirIcon from '@mui/icons-material/Air';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import WeatherPage from './components/pages/WeatherPage/WeatherPage';
import BmiPage from './components/pages/BmiPage/BmiPage';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface DrawerHeaderProps {
  open: boolean;
}

const DrawerHeader = styled('div')<DrawerHeaderProps>(({ open, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-end' : 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type Props = {};

function App({}: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ''}`}
    >
      {props.children}
    </NavLink>
  ));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer variant="permanent" open={open}>
            <DrawerHeader open={open}>
              <Avatar
                sx={{
                  backgroundColor: open ? 'red' : 'green',
                }}
              >
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                  {open ? (
                    <ChevronLeftIcon sx={{ color: 'white' }} />
                  ) : (
                    <ChevronRightIcon sx={{ color: 'white' }} />
                  )}
                </IconButton>
              </Avatar>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton component={MyNavLink} to="/" activeClassName="Mui-selected" exact>
                  <ListItemIcon sx={{ marginLeft: 0.4 }}>
                    <AirIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Weather'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={MyNavLink}
                  to="/bmi"
                  activeClassName="Mui-selected"
                  exact
                >
                  <ListItemIcon sx={{ marginLeft: 0.4 }}>
                    <AccessibilityNewIcon />
                  </ListItemIcon>
                  <ListItemText primary={'BIM'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Routes>
            <Route path="/" element={<WeatherPage />} />
            <Route path="/bmi" element={<BmiPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);
