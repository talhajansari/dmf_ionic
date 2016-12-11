import { UserModel } from './user-model'

export class PatientModel extends UserModel {
    constructor(public id: number){
      super(id)
    }
}
