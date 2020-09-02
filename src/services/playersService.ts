import axiosInstance from '../utilities/axios-instance';
import { AxiosResponse } from 'axios';

export interface PlayerResponse {
  playerId: number;
  name: string;
  surname: string;
  teamName: string;
  positionCode: number;
}

export class PlayersService {
  public async loadPlayerList(): Promise<AxiosResponse<PlayerResponse[]>> {
    return await axiosInstance.get('player');
  }
}
