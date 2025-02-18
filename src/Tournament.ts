import { GameServerAddress } from "./GameServerAddress";
import { Player } from "./Player";
import { PlayerRank } from "./PlayerRank";

export type Tournament = {
  tournamentID: string,
  players: Player[],
  lobby: string,
  options: TournamentOptions,
  started: boolean,
  finished: boolean,
  ranking: PlayerRank[],
  waiting: boolean, // whether we're waiting for the user (for non automatic tournament mode)
};

export type TournamentOptions = {
  gameAddress: GameServerAddress,
  autoPlay: boolean,
  numberOfGames: number,
  timeout: number,
  type: string,
};
