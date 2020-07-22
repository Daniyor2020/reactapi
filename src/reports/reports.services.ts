import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {

  delete(id: string):any{

    delete this.data[this.data.findIndex(item => item.id == id)];
        return `removed report by id ${id}`

    
  }

  update(id: string, report: any):any{
    let foundReport=this.data.find(item=>item.id==id)
    foundReport.name=report.name
    foundReport.type=report.type
    
    return foundReport
    
  }
  create(report: any) {
  this.data.push(report)
  return report
  }
  find(id: string):any {
    return this.data.find(item=>item.id==id)
  }
  findAll(): any {
    return this.data
    
  }
  private readonly data=[
    {
      id:"1",
      name: "dashboar1",
      type:'chart'
    },
    {
      id:"2",
      name: "rdashboard",
      type: ' pie'
    }
  ]
  
}
