import { prop, getModelForClass } from '@typegoose/typegoose';

class ProductClass {
  @prop({ required: true})
  public firstName: string;

  @prop({ required: true})
  public lastName: string;

  @prop({ required: true})
  public department: string;
}


const Product = getModelForClass(ProductClass);
export default Product;
