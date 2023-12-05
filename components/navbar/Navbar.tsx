"use client"

import react, * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faBreadSlice, faCaretDown, faCaretUp, faPalette, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { styled, alpha } from '@mui/material/styles';
import styles from './navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from 'next/image';
import coverPhoto  from "../../public/grocery.webp";
import logo from "../../public/Logo-new.webp"
import ProductSearchBar from '../searchProduct/SearchProduct';
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, Popover, Select, SelectChangeEvent, colors, makeStyles } from '@mui/material';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
// const useStyles = makeStyles((theme) => ({
//   popOver: {
//     border: '1px solid red',
//   },
//   popoverPaper: {
//     border: '1px solid red',
//   },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navItems = ['Home', 'About', 'Contact'];
  const storesItem =[
    { icon: faApple, storeName: "Grocery" },
    { icon: faBreadSlice, storeName: "Bakery" },
    { icon: faPalette, storeName: "Makeup" },
    { icon: faShoppingBag, storeName: "Bags" }
  ];
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openPoper, setOpenPoper] = React.useState<HTMLButtonElement | null>(null);
  const [store, setStore] = react.useState({ icon: faApple, storeName: "Grocery" })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget)
    setOpenPoper(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPoper(null);
  };

  const open = Boolean(openPoper);
  const id = open ? 'simple-popover' : undefined;
console.log(open,"chalra")

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const selectingStore = (store: { icon: IconDefinition; storeName: string; }) => {
    setStore(prev => ({ ...prev, icon:store.icon,storeName:store.storeName }))
    handleClose();
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            {/* <MailIcon /> */}
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            {/* <NotificationsIcon /> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
     <ProductSearchBar />
      <AppBar position="static" sx={{boxShadow:"none" }} >
        <Toolbar sx={{ background: "#fff",boxShadow:"none" }}>
          <Box display={'flex'} alignItems={"center"} gap={5} >
            <Box display={'flex'} alignItems={"center"}>
            <Image src={logo} alt={'chalkri ke nai'} ></Image>
            </Box>

            {/* <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> 
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
            <Button className={styles.storeBtn} aria-describedby={id} variant="contained" size='large' onClick={handleClick} sx={{fontSize:"15px",fontweight:"500",color:"#43ad5c", minWidth: "150px", background: "#fff", boxShadow: "none", border: " 1px solid #e5e7eb", borderRadius: "5px" }}>
            <FontAwesomeIcon icon={store.icon} style={{ color: "#43ad5c",marginRight:"5px",marginBottom:"3px" }} /> {store.storeName}
              <FontAwesomeIcon icon={open?faCaretUp:faCaretDown} style={{ color: "#43ad5c",marginLeft:"15px" }} />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={openPoper}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            // className={styles.popOverContainer}
            >
              <Box width={"12rem"} maxHeight={"12rem"} overflow={"auto"} className={styles.storeBox}>
                {storesItem.map(v => {
                  return (

                    <Typography sx={{ padding: "5px 10px" }} className={styles.storeBoxContain} onClick={() => selectingStore(v)}>
                      <FontAwesomeIcon icon={v.icon} style={{ marginRight:"5px" }} />{v.storeName}</Typography>
                  )
                })}
              </Box>

            </Popover>

          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} className={styles.about}>
                {item}
              </Button>
            ))}
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> 
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}