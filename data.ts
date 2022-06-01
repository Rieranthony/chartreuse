export type AutonomousEntity = {
  name: string;
  id: string;
  description: string;
  relationships: string[];
  tags: string[];
};

export const AutonomousEntities = new Map<string, AutonomousEntity>([
  [
    "1",
    {
      name: "AE number 1",
      id: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      relationships: ["2", "3"],
      tags: ["ETH", "DAO", "NFT"]
    }
  ],
  [
    "2",
    {
      name: "AE number 2",
      id: "2",
      description:
        "Netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed.",
      relationships: ["1"],
      tags: ["NFT"]
    }
  ],
  [
    "3",
    {
      name: "AE number 3",
      id: "3",
      description:
        "Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur.",
      relationships: ["1", "2"],
      tags: ["ETH"]
    }
  ]
]);
