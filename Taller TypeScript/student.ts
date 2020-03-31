export class Student {
    id: number;
    student_id: number;
    age: number;
    address: string;
    phone:number;
  
    constructor(id: number,  student_id: number, age: number, address: string,  phone:number) {
      this.id = id;
      this.student_id = student_id;
      this.age = age;
      this.address = address;
      this.phone = phone;
    }
  }