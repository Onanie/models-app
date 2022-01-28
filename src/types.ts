export default interface IModule {
   data:Data 
  };

  type Data ={
    id: string,
    type:string,
    attributes:Attribute,
  }

 type Attribute = {
  name: string,
  description: string,
  publish_date: string,
  publisher:string,
  measurements: {},
  metadata: {},
  exclusions: {}
  }