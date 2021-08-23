import React from 'react'
import SideNav from './components/SideNav/SideNav'
import { ThemeProvider } from '@material-ui/core/styles'
import { creatThemeByMode } from './styles/theme'
import AppBar from './components/AppBar/AppBar'
import { Paper } from '@material-ui/core'
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator'
import Info from './components/Info/Info'

const App = () => {

  const [pokemons, setPokemons] = React.useState([])
  const [generations, setGenerations] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [darkMode, setDarkMode] = React.useState(true)
  const [selected, setSelected] = React.useState(undefined)

  const handleToggleTheme = () => setDarkMode(current => !current)
  const handleSelect = async (pokemon) => {
    if (pokemon) {
      setLoading(true)
      const infoResult = await (await fetch(pokemon.url)).json()
      const speciesResult = await (await fetch(infoResult.species.url)).json()
      setSelected({ ...infoResult, ...speciesResult })
      setLoading(false)
      return
    }
    setSelected(pokemon)
  }
  const handleGeneration = async (url) => {
    const pokemonResults = await fetch(url)
    const pokemonSpecies = (await pokemonResults.json()).pokemon_species
    for (const pokemon of pokemonSpecies) {
      pokemon.url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
    }
    setPokemons(pokemonSpecies)
  }

  React.useEffect(() => {
    const init = async () => {
      setLoading(true)
      const pokemonResults = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      const generationResults = await fetch("https://pokeapi.co/api/v2/generation")
      setPokemons((await pokemonResults.json()).results)
      setGenerations((await generationResults.json()).results)
      setLoading(false)
    }
    init()
  }, [])

  return (
    <ThemeProvider theme={creatThemeByMode(darkMode ? true : false)}>
      <Paper square className="w-screen h-screen flex flex-col">
        <AppBar
          onToggleTheme={handleToggleTheme}
          darkMode={darkMode}
          generations={generations}
          onGenerationSelect={handleGeneration}
        />
        <div className="w-full flex-grow overflow-hidden flex">
          <SideNav
            pokemons={pokemons}
            onSelect={handleSelect}
          />
          {
            !loading &&
            <Info
              selected={selected}
              darkMode={darkMode}
            />
          }
        </div>
        <LoadingIndicator loading={loading} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
