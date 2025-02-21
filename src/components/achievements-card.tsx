import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Trophy, Star, Award, Medal } from "lucide-react";

const AchievementsCard = () => {
  return (
    <div className="w-full">
      <CardContainer>
        <CardBody className="relative bg-[#1e2538] text-white rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-opacity-18 border-[#2a3441]">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <CardItem translateZ="50" className="text-2xl font-bold text-white">
              Achievements & Recognition
            </CardItem>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Hackathon Winner */}
              <CardItem translateZ="40" className="flex items-start gap-4">
                <div className="rounded-lg bg-[#2a2f42] p-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-[#e2e8f0]">
                    Hackathon Winner
                  </h3>
                  <p className="text-[#94a3b8] text-sm">
                    Won the Code Relay 3.0 Hackathon, organized by IIT Bhubaneswar
                  </p>
                </div>
              </CardItem>

              {/* Achievement 2 */}
              <CardItem translateZ="40" className="flex items-start gap-4">
                <div className="rounded-lg bg-[#2a2f42] p-2">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-[#e2e8f0]">
                    Achievement 2
                  </h3>
                  <p className="text-[#94a3b8] text-sm">
                    Description of your second major achievement
                  </p>
                </div>
              </CardItem>

              {/* Achievement 3 */}
              <CardItem translateZ="40" className="flex items-start gap-4">
                <div className="rounded-lg bg-[#2a2f42] p-2">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-[#e2e8f0]">
                    Achievement 3
                  </h3>
                  <p className="text-[#94a3b8] text-sm">
                    Description of your third major achievement
                  </p>
                </div>
              </CardItem>

              {/* Achievement 4 */}
              <CardItem translateZ="40" className="flex items-start gap-4">
                <div className="rounded-lg bg-[#2a2f42] p-2">
                  <Medal className="w-6 h-6 text-purple-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-[#e2e8f0]">
                    Achievement 4
                  </h3>
                  <p className="text-[#94a3b8] text-sm">
                    Description of your fourth major achievement
                  </p>
                </div>
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export { AchievementsCard };