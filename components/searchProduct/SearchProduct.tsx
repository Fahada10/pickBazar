
import react, * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faBreadSlice, faCaretDown, faCaretUp, faPalette, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { styled, alpha } from '@mui/material/styles';
import styles from './searchProduct.module.css';
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
import coverPhoto from "../../public/grocery.webp";
import logo from "../../public/Logo-new.webp"

import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, Popover, Select, SelectChangeEvent, TextField, colors, makeStyles } from '@mui/material';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



export default function ProductSearchBar() {


    return (

        <Box >
            <Image src={coverPhoto} alt={'cover Photo'} style={{ width: "100%", height: "100%", position: "absolute", top: "0", zIndex: -10 }}></Image>
            <Box className={styles.searchContainer}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography fontSize={"3rem"} fontWeight={700} textAlign={"center"} gutterBottom>
                        Groceries Delivered in 90 Minute
                    </Typography>
                    <Typography fontSize={"1.125rem"} textAlign={"center"} fontWeight={500} gutterBottom>
                        Get your healthy foods & snacks delivered at your doorsteps all day everyday
                    </Typography>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            display: "flex",
                            minWidth: "100%"
                        }}
                    >
                        <TextField fullWidth id="fullWidth" className={styles.searchInput} InputProps={{
                            style: {
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                                background:"#fff"
                            },
                            placeholder:"Search your product here"
                        }} />
                        <Button variant='contained'className={styles.searchBtn} sx={{ background: "#43ad5c", padding: "1rem 1.5rem", border: "none", borderTopLeftRadius: "0", WebkitBorderBottomLeftRadius: "0" }}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }} />
                            <Typography sx={{ textDecoration: "none", marginLeft: '5px' }}>
                                Search
                            </Typography>
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>


    );
}