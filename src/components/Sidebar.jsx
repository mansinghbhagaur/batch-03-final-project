import { ExpandLess, ExpandMore, Inbox } from "@mui/icons-material";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router';

const CollabeItemList = ({ links }) => {
      const [open, setOpen] = React.useState(false);
      const navigate = useNavigate();
      console.log(links, "links")
      return (
            <>
                  <ListItem disablePadding divider>
                        <ListItemButton onClick={() => links.children ? setOpen(!open) : navigate(links.route)}>
                              <ListItemIcon>
                                    {links.icon}
                              </ListItemIcon>
                              <ListItemText primary={links.label} />
                              {links.children && (open ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                  </ListItem>
                  {
                        links.children && open && (
                              <Collapse in={open} timeout="" unmountOnExit>
                                    <List>
                                          {
                                                links.children.map((child, index) => (
                                                      <ListItem key={index} disablePadding divider>
                                                            <ListItemButton component={Link} to={child.route}>
                                                                  <ListItemIcon sx={{ ml: 4 }}>
                                                                        {child.icon}
                                                                  </ListItemIcon>
                                                                  <ListItemText primary={child.label} />
                                                            </ListItemButton>
                                                      </ListItem>
                                                ))
                                          }
                                    </List>
                              </Collapse>
                        )
                  }
            </>
      )
}


const Sidebar = () => {
      const Navlinks = [
            { icon: <Inbox />, label: 'Dashboard', route: '/' },
            { icon: <Inbox />, label: 'Todo Page', route: '/todopage' },
            // {
            //       icon: <Inbox />, label: 'User',
            //       children: [
            //             { icon: <Inbox />, label: 'User List', route: '/users' },
            //             { icon: <Inbox />, label: 'Student List', route: '/studentusers' },
            //       ]
            // },
            // { icon: <Inbox />, label: 'Todo List', route: '/todolist' },
            // { icon: <Inbox />, label: 'Todo List', route: '/todolist' },
      ]
      return (
            <List>
                  {
                        Navlinks.map((links, index) => (
                              <CollabeItemList links={links} key={index} />
                        ))
                  }

            </List>
      )
}

export default Sidebar;