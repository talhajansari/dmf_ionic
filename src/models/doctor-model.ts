import { UserModel } from './user-model'

export class DoctorModel extends UserModel {
    constructor(public id: number){
      super(id)
    }
}
