// src/components/SkillBadge.tsx

import { FC } from "react";

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-block px-3 py-1 bg-gray-800 text-violet-300 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition-colors cursor-default">
      {name}
    </span>
  );
};

export default SkillBadge;