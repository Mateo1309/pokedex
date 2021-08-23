import { Avatar, Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { completePokedexNumber } from '../../lib/utils'

const SideNav = ({ pokemons, onSelect: handleSelect }) => {
    return (
        <Box bgcolor="paper" className="side-nav flex flex-col">
            <div className="flex flex-col w-full items-center flex-grow overflow-y-auto pt-8">
                {
                    pokemons.map((pokemon, index) => (
                        <Paper onClick={() => handleSelect(pokemon)} elevation={8} className="pokemon-name-container">
                            <Avatar sx={{ width: 48, height: 48, bgcolor: "primary.main" }}>
                                <Typography className="text-white" variant="caption">
                                    {completePokedexNumber(index + 1)}
                                </Typography>
                            </Avatar>
                            <Typography className="flex-grow ml-4" variant="caption">
                                {pokemon.name}
                            </Typography>
                        </Paper>
                    ))
                }
            </div>
        </Box>
    )
}

SideNav.defaultProps = {
    pokemons: [],
}

export default SideNav
