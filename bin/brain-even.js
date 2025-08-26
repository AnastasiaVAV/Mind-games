#!/usr/bin/env node
import { rules, getGameRound } from '../src/games/even-game.js'
import launchTheGame from '../src/index.js'

launchTheGame(rules, getGameRound)
