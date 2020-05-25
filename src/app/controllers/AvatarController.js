import Avatar from '../models/Avatar';

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: file_name, path } = req.file;
    
    const avatarFile = await Avatar.create({
      name,
      file_name,
      path,
    })

    return res.json(avatarFile);
  }
}

export default new AvatarController();