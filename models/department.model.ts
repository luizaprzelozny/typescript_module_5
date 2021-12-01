import { prop, getModelForClass } from '@typegoose/typegoose';

class DepartmentClass {
  @prop({ required: true})
  public type: string;

  @prop({ required: true})
  public required: boolean;

  @prop({ required: true})
  public minLength: number = 5;

  @prop({ required: true})
  public maxLength: number = 20;
}


const Department = getModelForClass(DepartmentClass);
export default Department;