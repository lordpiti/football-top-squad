import axiosInstance from '../utilities/axios-instance';
import { AxiosResponse } from 'axios';

export class PlayersService {
  public async loadPlayerList(): Promise<AxiosResponse<any>> {
    return await axiosInstance.get('player');
  }
}
