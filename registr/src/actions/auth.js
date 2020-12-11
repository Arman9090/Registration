import instance from 'services/api';

export function getAllPost(){
    try {
        return instance.get('/posts/all' )
    } catch (error) {
      Promise.reject(error)
    }
}
export function createUser(data){
    try {
      return instance.post('/posts/create', data)
    } catch (error) {
      Promise.reject(error)
    }
}

export function postsDelete(id){
  try{
    return instance.put('/posts/delete', id)
  }catch(error){
    Promise.reject(error)
  }
}
  

export function postShow(id){
  try{
    return instance.put('/posts/show', {id})  

  }catch(error){
    Promise.reject(error)
  }
}
  

export function postEdit(id){
  try{
    return instance.put('/posts/edit', {id})  

  }catch(error){
    Promise.reject(error)
  }
}
  