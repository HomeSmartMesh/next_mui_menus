import {Toolbar, Divider, List, ListItem, 
    ListItemText, Drawer } from '@mui/material';
import Link from 'next/link'
import config from '../next.config'



export default function MenuDrawer({pages}){
const drawerWidth = config.drawerWidth
return(
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((page, index) => (
              <Link href={page.href} key={index}>
                <ListItem button key={page.name}>
                <ListItemText primary={page.name} />
                </ListItem>
              </Link>
          ))}
        </List>
      </Drawer>
)
}
