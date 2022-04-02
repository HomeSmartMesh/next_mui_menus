import { useState } from 'react';
import {Tabs, Tab, Box, Button, Typography,
  styled,Tooltip, Stack } from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router'
import config from '../next.config'
import GitHubIcon from '@mui/icons-material/GitHub';

const pages = [
  {name:'Type 1',href:'/type_1'},
  {name:'Type 2',href:'/type_2'},
  {name:'Type 3',href:'/type_3'},
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
  const drawerWidth = (router.pathname == '/')?0:config.drawerWidth
  const current_path_index = pages.findIndex((page)=>(page.href == router.pathname))
  if(current_path_index != -1){
    if(current_path_index != value){
      setValue(current_path_index)
    }
  }
  //
  return (
    <>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
    <Box sx={{ backgroundColor:"#1976D2",flexGrow: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          borderBottom: '3px solid #1976D2',
          '& .MuiTabs-indicator': {
            backgroundColor: 'white',
            height:2
          },
        }}
      >
        {pages.map((page,index)=>
          <Link href={page.href} key={index}>
                    <Tab sx={{flexGrow:0}} label={
                        <Typography component="div" sx={{ flexGrow: 1,color: 'white', display: 'block' }}>
                          {page.name}
                        </Typography>
                        } />
          </Link>
        )}
      </Tabs>
    </Box>
    <Box  sx={{ borderColor: 'divider',backgroundColor:"#1976D2",flexGrow: 0, height:51 }}>
        <Tooltip title="Open in Github">
            <a href="https://github.com/HomeSmartMesh/next_mui_menus" target="_blank" rel="noopener">
                <Button sx={{ my: 1, color: 'white'}}>
                    <GitHubIcon/>
                </Button>
            </a>
        </Tooltip>
    </Box>
    </Stack>
    </>
);
}


export default NavTabs
