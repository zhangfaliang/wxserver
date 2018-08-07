const path = require('path');
import { uploadFile } from '../utils/upload';
import { upload_file} from '../default.config';
const upload = (Router) => { 
  const uploadRoute = new Router();
  uploadRoute.post('/picture/upload', async (ctx) => { 
    let result = { sucess: false,};
    let serverFilePath = path.join(upload_file.address[0], upload_file.address[1])
    result = await uploadFile(ctx, {
      fileType: upload_file.file_type.album,//common or album
      path:serverFilePath
    })
    ctx.body = result;
  })
  return uploadRoute
}
module.exports = upload;