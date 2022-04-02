import Head from 'next/head'
import {Box, Typography,Toolbar  } from '@mui/material';
import MenuDrawer from '../../components/menudrawer'
import config from '../../next.config'
import pages from '../../public/pages.json'


export default function Test() {
  return (
    <>
        <Head>
        <title>Type 1</title>
        <link rel="icon" href={`${config.basePath}/favicon.ico`} />
        </Head>
        <Box sx={{ display: 'flex' }}>
        <MenuDrawer pages={pages.type_1}/>
        <Toolbar />
        <Typography p={1}>This is Type 1 page collection</Typography>
        {Array.from(Array(10).keys()).map((index)=>
            <Typography p={1} key={index}>T1 {index}</Typography>
        )}
        </Box>
    </>
  )
}
