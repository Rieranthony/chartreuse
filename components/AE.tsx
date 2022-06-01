import { AutonomousEntity, AutonomousEntities } from "../data";

type AEProps = {
  onGoToAE: (id: string) => void;
  level: number;
  currentStackLength: number;
} & AutonomousEntity;

export function AE({
  name,
  description,
  relationships,
  onGoToAE,
  level,
  currentStackLength
}: AEProps) {
  const opacity = 1 + (level - currentStackLength + 1) / 10;
  const offset = level * 8;
  const dynamicStyles = {
    left: `${offset}px`,
    right: `-${offset}px`,
    top: `${offset}px`,
    zIndex: offset,
    opacity
  };

  return (
    <div
      className={`bg-dp-00  flex flex-col p-4 border border-dp-medium-emphasis hover:border-dp-normal rounded-lg transition-colors absolute`}
      style={dynamicStyles}
    >
      <p className="text-xl mt-4 max-w-full">{name}</p>
      <p className="text-base mt-4 max-w-full">{description}</p>

      <div className="grid gap-4 grid-flow-col grid-cols-2 mt-8">
        {relationships.map((AEId, i) => {
          const AE = AutonomousEntities.get(AEId);

          if (!AE) return;

          return (
            <button
              className="whitespace-nowrap inline-flex items-center justify-center border-2 border-transparent rounded text-base font-medium text-white transition-all duration-300 text-base font-semi-bold bg-transparent text-dp-high-emphasis dark:hover:text-dp-normal border-dp-24"
              key={i}
              onClick={() => {
                onGoToAE(AEId);
              }}
            >
              {AE.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
