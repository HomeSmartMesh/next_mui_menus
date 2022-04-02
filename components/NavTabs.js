import { useState,useEffect } from 'react';
import {Tabs, Tab, Box, Button, Typography,
  styled } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router'

const pages = [
  {name:'main',href:'/'},
  {name:'Test',href:'/test'},
]

const AntTabs = styled(Tabs)({
  borderBottom: '3px solid #1976D2',
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
    height:2
  },
});

function NavTabs() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const current_path_index = pages.findIndex((page)=>(page.href == router.pathname))
  if(current_path_index != -1){
    if(current_path_index != value){
      setValue(current_path_index)
    }
  }
  //
  return (
    <Box sx={{ borderColor: 'divider',backgroundColor:"#1976D2" }}>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {pages.map((page,index)=>
          <Link href={page.href} key={index}>
                    <Tab label={
                        <Typography component="div" sx={{ flexGrow: 1,color: 'white', display: 'block' }}>
                          {page.name}
                        </Typography>
                        } />
          </Link>
        )}
      </AntTabs>
    </Box>
  );
}


export default NavTabs
