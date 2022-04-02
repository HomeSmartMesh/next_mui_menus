import Head from 'next/head'
import {Typography  } from '@mui/material';
import config from '../next.config'


const description = `Horizontal App bar and left side pages menu`

export default function Main() {

  return (
    <>
      <Head>
      <title>Menus</title>
      <link rel="icon" href={`${config.basePath}/favicon.ico`} />
      </Head>
      <Typography p={1}>{description}</Typography>
    </>
  )
}
