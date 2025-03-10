#!/usr/bin/env node
import { rules, getGameRound } from '../src/games/progression-game.js';
import launchTheGame from '../src/index.js';

const launchGame = () => launchTheGame(rules, getGameRound);
launchGame();
