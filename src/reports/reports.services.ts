import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {

  delete(id: string):any{
    this.data[this.data.findIndex(item=>item.id==id)]
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
      name: "report1",
      type:'kpi'
    },
    {
      id:"2",
      name: "report2",
      type: ' growth'
    }
  ]
  
}
