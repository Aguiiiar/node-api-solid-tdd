import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
  findById(challengeId: string): Promise<Challenge | null>;
}
