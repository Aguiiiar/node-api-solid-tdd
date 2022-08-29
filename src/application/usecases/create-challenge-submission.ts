import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmisttionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmisttion {
  constructor(
    private studentsRepositoy: StudentsRepository,
    private challengesRepository: ChallengesRepository
  ) {}
  public async execute({
    studentId,
    challengeId,
  }: CreateChallengeSubmisttionRequest) {
    const student = await this.studentsRepositoy.findById(studentId);

    if (!student) {
      throw new Error("Students does not exists.");
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenges does not exists.");
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}
