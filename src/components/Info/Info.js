import { Divider, ThemeProvider, Typography, Paper, Button } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'
import { creatThemeByModeAndColor } from '../../styles/theme'
import { Chart } from "react-google-charts"
import { SCALE_FACTOR } from '../../lib/constants'

function Info({ selected: pokemon, darkMode }) {

    const getData = React.useCallback(() => {
        const data = []
        data.push(["Estadistica", "Valor"])
        if (pokemon.stats) {
            for (const stat of pokemon.stats) {
                data.push([stat.stat.name, stat.base_stat])
            }
        }
        return data
    }, [pokemon])

    return (
        <React.Fragment>
            {
                pokemon ?
                    <ThemeProvider theme={creatThemeByModeAndColor(darkMode, pokemon.color.name)}>
                        <Box className="absolute right-0 bottom-0" style={{ width: "calc(100% - 350px)", height: 200, zIndex: 2 }} bgcolor="primary.main" />
                        <div className="flex-grow h-full flex flex-col">
                            <div className="flex w-full items-center">
                                <div className="flex ml-10">
                                    <img width={180} height={180} src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default} />
                                    {pokemon.sprites.back_default &&
                                        <img width={180} height={180} src={pokemon.sprites.back_default} alt={pokemon.sprites.back_default} />
                                    }
                                </div>
                                <div className="w-full flex pt-8">
                                    <div className="w-full flex flex-col items-end mr-8">
                                        <Typography variant="h2" className="capitalize">{pokemon.name}</Typography>
                                        {
                                            pokemon.types && pokemon.types.map(type => (
                                                <Typography className="mr-4" variant="h6" key={type.type.name}>{type.type.name.toUpperCase()}</Typography>
                                            ))
                                        }
                                        <Divider style={{ width: "50vw", borderBottomWidth: 4, marginTop: 20 }} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow py-10 px-8 justify-end" style={{ zIndex: 5 }}>
                                <Paper className="py-10 px-8 flex" elevation={15}>
                                    <div className="px-8">
                                        <Typography variant="h6">{"Datos generales".toUpperCase()}</Typography>
                                        <div className="pt-8">
                                            <Typography color="textSecondary" variant="body1">{"Peso"}</Typography>
                                            <Typography variant="h6">{`${pokemon.weight ? (pokemon.weight * SCALE_FACTOR).toFixed(2) : ""} (Kg)`}</Typography>
                                            <Typography color="textSecondary" variant="body1">{"Altura"}</Typography>
                                            <Typography variant="h6">{`${pokemon.height ? (pokemon.height * SCALE_FACTOR).toFixed(2) : ""} (m)`}</Typography>
                                            <Typography color="textSecondary" variant="body1">{"Generación"}</Typography>
                                            <Typography variant="h6">{`${pokemon.generation.name}`}</Typography>
                                        </div>
                                    </div>
                                    <Divider orientation="vertical" />
                                    <div className="px-8" style={{ width: 400 }}>
                                        <Typography variant="h6">{"Estadísticas".toUpperCase()}</Typography>
                                        <div className="pt-8">
                                            <Chart
                                                width={350}
                                                height={250}
                                                chartType="BarChart"
                                                loader={<div>Cargando...</div>}
                                                data={getData()}
                                                options={{
                                                    chartArea: { width: '50%' },
                                                    colors: [creatThemeByModeAndColor(darkMode, pokemon.color.name).palette.primary.main]
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <Divider orientation="vertical" />
                                    <div className="px-8">
                                        <div className="h-full flex justify-center items-center">
                                            <Button variant="contained" size="large">
                                                {"Más información"}
                                            </Button>
                                        </div>
                                    </div>
                                </Paper>
                            </div>
                        </div>
                    </ThemeProvider>
                    :
                    <div className="flex flex-grow items-center justify-end">
                        <Box className="h-full relative right-0" style={{ width: 200 }} bgcolor="primary.main" />
                        <div className="absolute flex flex-col items-end" style={{ maxWidth: "65vw", paddingRight: 150 }}>
                            <Typography align="right" className="font-black spacing-3" variant="h2">
                                {"Selecciona un pokemon para ver su información".toUpperCase()}
                            </Typography>
                            <Divider style={{ width: "50vw", borderBottomWidth: 4, marginTop: 20 }} />
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}

Info.defaultProps = {
    selected: undefined,
}

export default Info
