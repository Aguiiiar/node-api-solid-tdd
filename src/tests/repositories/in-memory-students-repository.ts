import { StudentsRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudentsReposity implements StudentsRepository {
  public items: Student[] = [];

  async findById(studentId: string): Promise<Student | null> {
    const student = this.items.find((student) => student.id === studentId);

    if (!student) {
      return null;
    }

    return student;
  }
}
