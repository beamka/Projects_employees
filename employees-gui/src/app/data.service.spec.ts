import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

jest.mock('@angular/common/http');

describe('DataService', () => {
  let httpClient: HttpClient;
  let dataService: DataService;

  beforeEach(() => {
    httpClient = new HttpClient({} as any);
    dataService = new DataService(httpClient);
    jest.spyOn(httpClient, 'get');
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should call httpClient.get with the expected url', () => {
    dataService.sendGetRequest('/employee/all');
    expect(httpClient.get).toHaveBeenCalledWith(dataService.REST_API_SERVER+'/employee/all');
  });

  it('should call httpClient.post with the expected url', () => {
    dataService.sendPostRequest('/project/set', '{test}');
    expect(httpClient.post).toHaveBeenCalledWith(dataService.REST_API_SERVER+'/project/set','{test}');
  });

});
