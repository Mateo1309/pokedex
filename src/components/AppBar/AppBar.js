import React from 'react'
import { Typography, AppBar as MuiAppBar, Toolbar, FormGroup, FormControlLabel, Switch, Icon, Button, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import logo from '../../assets/logo.png'


const AppBar = ({ onToggleTheme: handleToggleTheme, darkMode, generations, onGenerationSelect }) => {
    const [open, setOpen] = React.useState(false)
    const handleGeneration = (url) => {
        setOpen(false)
        onGenerationSelect(url)
    }
    return (
        <MuiAppBar elevation={1} color="transparent" position="relative">
            <Toolbar>
                <img width={50} alt={"logo"} className="fit-cover" src={logo} />
                <Typography className="ml-10" variant="button">{"Pokedex"}</Typography>
                <div className="w-full justify-end flex items-center">
                    <div className="px-8 mr-8">
                        <Button onClick={() => setOpen(true)} variant="contained">
                            {"Generaciones"}
                        </Button>
                    </div>
                    <FormGroup onChange={handleToggleTheme}>
                        <FormControlLabel classes={{ label: "flex ml-2" }} control={<Switch checked={darkMode} size="small" />} label={darkMode ? <Icon fontSize="small">light_mode</Icon> : <Icon fontSize="small">dark_mode</Icon>} />
                    </FormGroup>
                </div>
            </Toolbar>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <List className="px-4">
                    {
                        generations.map(generation => (
                            <ListItem onClick={() => handleGeneration(generation.url)} button>
                                <ListItemText primary={generation.name} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </MuiAppBar>
    )
}

AppBar.defaultProps = {
    onToggleTheme: () => true,
    darkMode: true
}

export default AppBar
