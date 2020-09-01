import axiosInstance, { AxiosResponse } from 'axios';
import { SaveSquadPayload } from '../store/squad/squadActionTypes';

const url = `${process.env.REACT_APP_LOGIN_API_URL}/user/CreateTopSquad`;

export class SquadService {
  public async saveTopSquad(
    squad: SaveSquadPayload
  ): Promise<AxiosResponse<any>> {
    return await axiosInstance.post(url, squad);
  }
}
