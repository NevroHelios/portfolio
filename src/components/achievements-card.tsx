import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Trophy, Star, Award, Medal } from "lucide-react";

const AchievementsCard = () => {
  return (
    <div className="w-full">
      <CardContainer>
        <CardBody className="relative bg-[#1a1a1a] text-white rounded-xl p-6 shadow-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors duration-500">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <CardItem 
              translateZ="50" 
              className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
            >
              Achievements & Recognition
            </CardItem>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Hackathon Winner */}
              <CardItem 
                translateZ="40" 
                className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              >
                <div className="rounded-lg bg-[#1a1a1a] p-2 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                  <Trophy className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100">
                    Hackathon Winner
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Won the Code Relay 3.0 Hackathon, organized by IIT Bhubaneswar
                  </p>
                </div>
              </CardItem>

              {/* Achievement 2 */}
              <CardItem 
                translateZ="40" 
                className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              >
                <div className="rounded-lg bg-[#1a1a1a] p-2 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100">
                    Achievement 2
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Description of your second major achievement
                  </p>
                </div>
              </CardItem>

              {/* Achievement 3 */}
              <CardItem 
                translateZ="40" 
                className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              >
                <div className="rounded-lg bg-[#1a1a1a] p-2 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100">
                    Achievement 3
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Description of your third major achievement
                  </p>
                </div>
              </CardItem>

              {/* Achievement 4 */}
              <CardItem 
                translateZ="40" 
                className="flex items-start gap-4 group hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              >
                <div className="rounded-lg bg-[#1a1a1a] p-2 border border-gray-800 group-hover:border-cyan-500/50 transition-colors">
                  <Medal className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-100">
                    Achievement 42
                  </h3>
                  <p className="text-gray-400 text-sm">
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