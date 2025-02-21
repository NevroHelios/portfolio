import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Trophy, Star, Award, Medal } from "lucide-react";

const AchievementsCard = () => {
  return (
    <CardContainer className="w-[100%] max-w-[1000px]">
      <CardBody className="relative bg-[#1e2538] text-white rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-opacity-18 border-[#2a3441]">
        <div className="flex flex-col space-y-4">
          <CardItem translateZ="50" className="text-2xl font-bold text-[#e2e8f0]">
            Achievements & Recognition
          </CardItem>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardItem translateZ="40" className="flex items-start space-x-4">
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">Achievement 1</h3>
                <p className="text-[#94a3b8] text-sm">Description of your first major achievement</p>
              </div>
            </CardItem>

            <CardItem translateZ="40" className="flex items-start space-x-4">
              <Star className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">Achievement 2</h3>
                <p className="text-[#94a3b8] text-sm">Description of your second major achievement</p>
              </div>
            </CardItem>

            <CardItem translateZ="40" className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">Achievement 3</h3>
                <p className="text-[#94a3b8] text-sm">Description of your third major achievement</p>
              </div>
            </CardItem>

            <CardItem translateZ="40" className="flex items-start space-x-4">
              <Medal className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">Achievement 4</h3>
                <p className="text-[#94a3b8] text-sm">Description of your fourth major achievement</p>
              </div>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export { AchievementsCard };