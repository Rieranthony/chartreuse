import { AutonomousEntity, AutonomousEntities } from "../data";
import { motion } from "framer-motion";

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
  const position = currentStackLength - 1 - level;
  const opacity = 1 - position / 10;
  const offset = position * (8 + position);
  const dynamicStyles = {
    zIndex: level,
    position: position === 0 ? "relative" : "absolute"
  } as const;

  if (position > 8) {
    return;
  }

  return (
    <motion.div
      drag
      dragElastic={0.2}
      whileHover={{ scale: 1.05, opacity: 1 }}
      initial={{ opacity: 0.5, top: 300 }}
      animate={{
        opacity,
        left: offset,
        right: offset,
        top: -offset
      }}
      exit={{ opacity: 0 }}
      layout
      className={`bg-dp-00 flex flex-col justify-between p-4 border border-dp-medium-emphasis hover:border-dp-normal rounded-lg transition-colors md:min-h-[360px]`}
      style={dynamicStyles}
    >
      <div>
        <p className="text-xl mt-4 max-w-full">{name}</p>
        <p className="text-base mt-4 max-w-full">{description}</p>
      </div>

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
    </motion.div>
  );
}
