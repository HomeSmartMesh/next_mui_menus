import Head from 'next/head'
import {CssBaseline,Box, Typography,Toolbar  } from '@mui/material';
import MenuDrawer from '../../components/menudrawer'
import config from '../../next.config'
import pages from '../../public/pages.json'


export default function Test() {
  return (
    <>
        <Head>
        <title>Type 3</title>
        <link rel="icon" href={`${config.basePath}/favicon.ico`} />
        </Head>
        <Box sx={{ display: 'flex' }}>
        <MenuDrawer pages={pages.type_3} drawerWidth={300}/>
        <Toolbar />
        <Typography p={1}>This is Type 3 page collection</Typography>
        {Array.from(Array(10).keys()).map((index)=>
            <Typography p={1} key={index}>T3 {index}</Typography>
        )}
        </Box>
    </>
  )
}
