import http from "./http";
import IModule from "./types"

class TutorialDataService {
  getAll() {
    return http.get<Array<IModule>>("/models");
  }

  getById(id: string) {
    return http.get<IModule>(`models/${id}`);
  }

  queryModel(id: string) {
    return http.post<IModule>(`decision/${id}`);
  }

  listBatchFiles(id: string) {
    return http.get<IModule>(`batch"/${id}`);
  }

  uploadBatchFile(id: string) {
    return http.post<IModule>(`batch"/${id}`);
  }

  retrieveProcessedBatch(id: string, fileId:string) {
    return http.get<IModule>(`batch/${id}/${fileId}`);
  }

  deleteBatchFile(id:string, fileId:string) {
    return http.delete<IModule>(`batch/${id}/${fileId}`);
  }

 
}

export default new TutorialDataService();