import { ChallengesRepository } from "../../application/repositories/ChallengesRepository";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengesReposity implements ChallengesRepository {
  public items: Challenge[] = [];
  async findById(challengeId: string): Promise<Challenge | null> {
    const challenge = this.items.find(
      (challenge) => challenge.id === challengeId
    );

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}
