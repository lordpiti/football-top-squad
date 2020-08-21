import axiosInstance, { AxiosResponse } from 'axios';

const url = `${process.env.REACT_APP_LOGIN_API_URL}/user/CreateTopSquad`;

export class SquadService {
  public async saveTopSquad(squad: any): Promise<AxiosResponse<any>> {
    return await axiosInstance.post(url, squad);
  }
}
