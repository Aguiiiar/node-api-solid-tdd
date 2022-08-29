import { Student } from "../../domain/entities/student";

export interface StudentsRepository {
  findById(studentId: string): Promise<Student | null>;
}
