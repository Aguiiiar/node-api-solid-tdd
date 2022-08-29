import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesReposity } from "../../tests/repositories/in-memory-challengs-repository";
import { InMemoryStudentsReposity } from "../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmisttion } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentsRepository = new InMemoryStudentsReposity();
    const challengsRepository = new InMemoryChallengesReposity();

    const student = Student.create({
      name: "Aguiar",
      email: "doe@example.com",
    });

    studentsRepository.items.push(student);

    const challenge = Challenge.create({
      title: "Challenge 01",
      instructionsUrl: "http://example.com",
    });

    challengsRepository.items.push(challenge);

    const sut = new CreateChallengeSubmisttion(
      studentsRepository,
      challengsRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
