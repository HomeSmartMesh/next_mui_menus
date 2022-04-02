import Head from 'next/head'
import {Typography  } from '@mui/material';
import config from '../next.config'


const description = `Test Page`

export default function Test() {

  return (
    <>
      <Head>
      <title>Test</title>
      <link rel="icon" href={`${config.basePath}/favicon.ico`} />
      </Head>
      <Typography p={1}>{description}</Typography>
    </>
  )
}
